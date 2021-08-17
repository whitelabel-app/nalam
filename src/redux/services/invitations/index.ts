import firebase from 'react-native-firebase';
import { DocumentReference } from 'react-native-firebase/firestore';

interface InviteExistingUser {
    groupId?: string;
    ownerId?: string;
    inviteeId?: string;
    groupName?: string;
    ownerName?: string;
    ownerAvatar?: string;
}

export function addInviteToExistingUser(
    data: InviteExistingUser,
): Promise<DocumentReference> {
    return firebase
        .firestore()
        .collection('invitations')
        .add({
            ...data,
            createdAt: new Date(),
            status: 'pending',
        });
}

interface InviteNonExistingUser {
    groupId?: string;
    ownerId?: string;
    phoneNumber?: string;
    groupName?: string;
    ownerName?: string;
    ownerAvatar?: string;
}

export function addInviteToNonExistingUser(
    data: InviteNonExistingUser,
): Promise<DocumentReference> {
    return firebase
        .firestore()
        .collection('invitations')
        .add({
            ...data,
            createdAt: new Date(),
            status: 'not-user',
        });
}
