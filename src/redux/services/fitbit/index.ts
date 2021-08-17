import firebase from 'react-native-firebase';
import { AuthorizeResult } from 'react-native-app-auth';

interface Params {
    day: string;
    uid: string;
    setAsCompleted?: boolean;
}

export async function resolveFitbitDataFor({
    day,
    uid,
    setAsCompleted,
}: Params) {
    return firebase.functions().httpsCallable('resolveFitbitDataForDay')({
        day,
        uid,
        setAsCompleted,
    });
}

export function resolveFitbitSummaryFor({ week, uid }) {
    return firebase.functions().httpsCallable('resolveFitbitSummaryForWeek')({
        week,
        uid,
    });
}

interface Credentials {
    credentials: AuthorizeResult;
}

export function addFitbitCredentials({ credentials }: Credentials) {
    return firebase.functions().httpsCallable('addFitbitCredentials')({
        credentials,
    });
}
