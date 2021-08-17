import { useState } from 'react';
import useLastSyncFitbit from './useLastSyncFitbit';
import { getDoc } from '../firebase';
import isGreaterDateTime from '../../../helpers/isGreaterDateTime';
import { getFormattedDate } from '../../../helpers';

const activityCache = new Map();
const activityDateCache = new Map();
const isFetchingCache = new Map();

export default function useActivities(uid: string, day: string | Date) {
    const parsedDay = day instanceof Date ? getFormattedDate(day) : day;
    const key = `${uid}/${parsedDay}`;
    const [activity, setActivity] = useState<void | object>();
    const lastSyncFitbit = useLastSyncFitbit(uid);

    const fetchActivity = async () => {
        if (isFetchingCache.get(key)) {
            return;
        }
        isFetchingCache.set(key, true);
        const doc = await getDoc({
            path: `users/${uid}/history/${parsedDay}/fitbit/activities`,
        });
        const data = doc?.data;
        activityCache.set(key, data);
        activityDateCache.set(key, lastSyncFitbit);
        isFetchingCache.set(key, false);
        setActivity(data);
    };
    if (lastSyncFitbit) {
        if (activityCache.has(key)) {
            const activityDate = activityDateCache.get(key);
            if (isGreaterDateTime(lastSyncFitbit, activityDate)) {
                fetchActivity();
            }
            return activityCache.get(key);
        } else {
            fetchActivity();
        }
    }
    return activity;
}
