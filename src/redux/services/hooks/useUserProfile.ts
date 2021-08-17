import { useState } from 'react';
import useLastSyncFitbit from './useLastSyncFitbit';
import { getDoc } from '../firebase';
import isGreaterDateTime from '../../../helpers/isGreaterDateTime';

const profileCache = new Map();
const lastSyncCache = new Map();
const isFetchingCache = new Map();
export default function useUserProfile(uid: string) {
    const key = `${uid}`;
    const [userProfile, setUserProfile] = useState<void | object>();
    const lastSyncFitbit = useLastSyncFitbit(uid);

    const fetchUserProfile = async () => {
        if (isFetchingCache.get(key)) {
            return;
        }
        isFetchingCache.set(key, true);
        const doc = await getDoc({
            path: `users/${uid}/profiles/fitbit`,
        });
        const data = doc?.data;
        profileCache.set(key, data);
        lastSyncCache.set(key, lastSyncFitbit);
        isFetchingCache.set(key, false);
        setUserProfile(data);
    };
    if (lastSyncFitbit) {
        if (profileCache.has(key)) {
            const lastSync = lastSyncCache.get(key);
            if (isGreaterDateTime(lastSyncFitbit, lastSync)) {
                fetchUserProfile();
            }
            return profileCache.get(key);
        } else {
            fetchUserProfile();
        }
    }
    return userProfile;
}
