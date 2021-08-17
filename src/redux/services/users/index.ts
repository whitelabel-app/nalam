import { useState, useEffect } from 'react';
import firebase from 'react-native-firebase';
import { getCurrentUserUid } from '../auth';
import { getDoc } from '../firebase';

export async function userHasDevices() {
    const devices = await firebase
        .firestore()
        .collection(`users/${getCurrentUserUid()}/devices`)
        .get();

    return !devices.empty;
}

export async function listenFitbitDataFor({ day, uid, withCallback }) {
    return firebase
        .firestore()
        .collection(`users/${uid}/history/${day}/fitbit`)
        .onSnapshot(querySnapshot => {
            if (querySnapshot.empty) {
                return withCallback(null);
            }
            querySnapshot.forEach(doc => {
                if (doc.exists) {
                    const { id, data } = doc;
                    return withCallback({
                        id,
                        data: data(),
                    });
                }
                return withCallback(null);
            });
        });
}

export async function listenFitbitSummaryFor({ week, uid, withCallback }) {
    return firebase
        .firestore()
        .doc(`users/${uid}/summary/${week}/fitbit/data`)
        .onSnapshot(docSnapshot => {
            if (docSnapshot.exists) {
                const { id, data } = docSnapshot;
                return withCallback({
                    id,
                    data: data(),
                });
            }
            return withCallback(null);
        });
}

interface User {
    id: string;
    data?: {
        [key: string]: any;
    };
}

export async function resolveUserByPhoneNumber(number) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('phoneNumber', '==', number)
        .limit(1)
        .get();
    if (result.empty) {
        return null;
    }
    const { id, data } = result.docs[0];
    return {
        id,
        data: data() || undefined,
    };
}

interface UserInvitee {
    inviteeId: string;
    groupId: string;
}

export async function userHasInvitationToGroup(
    params: UserInvitee,
): Promise<boolean> {
    const { inviteeId, groupId } = params;
    const result = await firebase
        .firestore()
        .collection('invitations')
        .where('inviteeId', '==', inviteeId)
        .where('groupId', '==', groupId)
        .where('status', '==', 'pending')
        .limit(1)
        .get();

    return !result.empty;
}

interface PhoneInvitee {
    phoneNumber: string;
    groupId: string;
}

export async function phoneNumberHasInvitationToGroup(
    params: PhoneInvitee,
): Promise<boolean> {
    const { phoneNumber, groupId } = params;
    const result = await firebase
        .firestore()
        .collection('invitations')
        .where('phoneNumber', '==', phoneNumber)
        .where('groupId', '==', groupId)
        .where('status', '==', 'not-user')
        .limit(1)
        .get();

    return !result.empty;
}

export function useUserProfiles(users) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>();

    useEffect(() => {
        if (users && users.length) {
            const promises = users.map(user => {
                return getDoc({
                    path: `users/${user.id}/profiles/fitbit`,
                }).then(doc => {
                    if (doc) {
                        return {
                            id: user.id,
                            data: {
                                ...doc.data,
                                ...user.data,
                            },
                        };
                    }
                    return null;
                });
            });
            Promise.all(promises).then(profiles => {
                setData(profiles.filter(profile => !!profile));
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
        }
    }, [users]);

    return [data, isLoading];
}
