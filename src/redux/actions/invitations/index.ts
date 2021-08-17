import Contacts from 'react-native-contacts';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Alert, Platform, PermissionsAndroid } from 'react-native';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { openAppUrl, getNormalizedNumber } from '../../../helpers';
import {
    resolveUserByPhoneNumber,
    userHasInvitationToGroup,
    phoneNumberHasInvitationToGroup,
} from '../../services/users';
import {
    addInviteToExistingUser,
    addInviteToNonExistingUser,
} from '../../services/invitations';
import { getCurrentUserUid } from '../../services/auth';
import { stopLoadingApp, startLoadingApp } from '../app';

export const LOAD_PHONE_CONTACTS = 'LOAD_PHONE_CONTACTS';

function getPhoneContacts() {
    return dispatch => {
        return Contacts.getAll((err, contacts) => {
            if (err) {
                dispatch(stopLoadingApp());
                console.log(err);
            } else {
                dispatch({
                    type: LOAD_PHONE_CONTACTS,
                    contacts: contacts.filter(
                        contact => contact.phoneNumbers?.length > 0,
                    ),
                });
                dispatch(stopLoadingApp());
            }
        });
    };
}

function getContacts() {
    return dispatch => {
        if (Platform.OS === 'android') {
            return PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts',
                    message: 'This app would like to access your contacts.',
                    buttonPositive: 'Accept',
                },
            ).then(() => dispatch(getPhoneContacts()));
        }
        return dispatch(getPhoneContacts());
    };
}

function showContactsPermissionAlert() {
    Alert.alert(
        'Contacts permission needed',
        'You need to grant permission in order to load contacts from your phone.',
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK', onPress: () => openAppUrl('app-settings:') },
        ],
        { cancelable: false },
    );
}

function handleContactsPermission(result) {
    return dispatch => {
        switch (result) {
            case RESULTS.UNAVAILABLE:
                dispatch(
                    stopLoadingApp({
                        onStopLoading: () =>
                            Alert.alert(
                                'Contacts access is not available on this device.',
                            ),
                    }),
                );
                break;
            case RESULTS.GRANTED:
            case RESULTS.DENIED:
                dispatch(getContacts());
                break;
            case RESULTS.BLOCKED:
                dispatch(
                    stopLoadingApp({
                        onStopLoading: showContactsPermissionAlert,
                    }),
                );
                break;
        }
    };
}

export function loadPhoneContacts() {
    return async dispatch => {
        try {
            const contactsPermission =
                Platform.OS === 'android'
                    ? PERMISSIONS.ANDROID.READ_CONTACTS
                    : PERMISSIONS.IOS.CONTACTS;
            const result = await check(contactsPermission);
            dispatch(handleContactsPermission(result));
        } catch (error) {
            dispatch(stopLoadingApp());
            console.log(error);
        }
    };
}

function openSmsApp(number, invitationId) {
    const separator = Platform.OS === 'android' ? '?' : '&';
    return openAppUrl(
        `sms:${number}${separator}body=Intall nalam app https://us-central1-nalamapp-cff82.cloudfunctions.net/api/invitations/${invitationId}`,
    );
}

function getUserPhoneNumber(user) {
    return user.data ? user.data.phoneNumber : '';
}

function inviteExistingUser(params) {
    return async dispatch => {
        const { user, groupId, groupName, ownerName, ownerAvatar } = params;
        let userIsInvited;
        try {
            userIsInvited = await userHasInvitationToGroup({
                inviteeId: user.id,
                groupId,
            });
        } catch (error) {
            console.log(error);
        }
        if (userIsInvited) {
            return dispatch(
                stopLoadingApp({
                    onStopLoading: () =>
                        Alert.alert(
                            `User with phone ${getUserPhoneNumber(
                                user,
                            )} is already invited`,
                        ),
                }),
            );
        }
        await addInviteToExistingUser({
            groupId,
            ownerId: getCurrentUserUid(),
            groupName,
            ownerName,
            ownerAvatar,
            inviteeId: user.id,
        });
        return dispatch(
            stopLoadingApp({
                onStopLoading: () => Alert.alert('Invitation sent to user'),
            }),
        );
    };
}

function inviteNonExistingUser(params) {
    return async dispatch => {
        const { number, groupId, groupName, ownerName, ownerAvatar } = params;
        const phoneIsInvited = await phoneNumberHasInvitationToGroup({
            phoneNumber: number,
            groupId,
        });
        if (phoneIsInvited) {
            return dispatch(
                stopLoadingApp({
                    onStopLoading: () =>
                        Alert.alert(
                            `User with phone ${number} is already invited`,
                        ),
                }),
            );
        }
        const invitation = await addInviteToNonExistingUser({
            groupId,
            ownerId: getCurrentUserUid(),
            phoneNumber: number,
            groupName,
            ownerName,
            ownerAvatar,
        });
        openSmsApp(number, invitation.id);
        return dispatch(stopLoadingApp());
    };
}

function userIsMemberOfGroup(members, userId) {
    return !!members.find(member => member.id === userId);
}

export function inviteUserToGroup({ number, group, members, ownerProfile }) {
    return async dispatch => {
        const { fullName: ownerName, avatar640: ownerAvatar } = ownerProfile;
        const groupName = group.data.name;
        dispatch(startLoadingApp({ transparent: true }));
        const numberData = parsePhoneNumberFromString(number);
        const phoneNumber = numberData
            ? numberData.number
            : getNormalizedNumber(number);

        const user = await resolveUserByPhoneNumber(phoneNumber);
        if (user) {
            if (userIsMemberOfGroup(members, user.id)) {
                return dispatch(
                    stopLoadingApp({
                        onStopLoading: () =>
                            Alert.alert(
                                `User with phone ${getUserPhoneNumber(
                                    user,
                                )} is already member of the group`,
                            ),
                    }),
                );
            }
            return dispatch(
                inviteExistingUser({
                    user,
                    groupId: group.id,
                    groupName,
                    ownerName,
                    ownerAvatar,
                }),
            );
        }
        return dispatch(
            inviteNonExistingUser({
                number: phoneNumber,
                groupId: group.id,
                groupName,
                ownerName,
                ownerAvatar,
            }),
        );
    };
}
