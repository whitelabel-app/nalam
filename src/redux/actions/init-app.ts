import firebase from 'react-native-firebase';
import { userHasDevices } from '../services/users';

async function navigateToApp(navigate: (string) => {}) {
    try {
        const hasDevices = await userHasDevices();
        if (hasDevices) {
            navigate('Dashboard');
        } else {
            navigate('RegisterDevice');
        }
    } catch (error) {
        console.log(error);
        navigate('Dashboard');
    }
}

function startListenForAuthState({ navigate }) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            navigateToApp(navigate);
        } else {
            navigate('Auth');
        }
    });
}

export default function initApp(navigation) {
    return () => {
        startListenForAuthState(navigation);
    };
}
