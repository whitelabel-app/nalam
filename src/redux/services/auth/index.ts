import firebase from 'react-native-firebase';

export function getCurrentUser() {
    return firebase.auth().currentUser;
}
export function getCurrentUserUid() {
    const currentUser = getCurrentUser() || undefined;
    return currentUser && currentUser.uid;
}
