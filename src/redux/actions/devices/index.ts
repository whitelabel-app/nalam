import { authorize } from 'react-native-app-auth';
import {
    REACT_APP_FITBIT_CLIENT_ID,
    REACT_APP_FITBIT_CLIENT_SECRET,
} from 'react-native-dotenv';
import { addFitbitCredentials } from '../../services/fitbit';

const config = {
    clientId: REACT_APP_FITBIT_CLIENT_ID,
    clientSecret: REACT_APP_FITBIT_CLIENT_SECRET,
    redirectUrl: 'nalam://fitbitAuthorize',
    scopes: [
        'activity',
        'heartrate',
        'location',
        'nutrition',
        'profile',
        'settings',
        'sleep',
        'social',
        'weight',
    ],
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
        tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
        revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke',
    },
};

export function registerFitbitDevice({ navigate }) {
    return async () => {
        try {
            const credentials = await authorize(config);
            await addFitbitCredentials({ credentials });
            return navigate('Dashboard');
        } catch (error) {
            console.log(error.message);
        }
    };
}
