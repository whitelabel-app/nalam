import firebase from 'react-native-firebase';

export function logout() {
    firebase.auth().signOut();
}
