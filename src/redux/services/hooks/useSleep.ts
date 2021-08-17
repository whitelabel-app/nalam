import { useState } from 'react';
import useLastSyncFitbit from './useLastSyncFitbit';
import { getDoc } from '../firebase';
import isGreaterDateTime from '../../../helpers/isGreaterDateTime';
import { getFormattedDate } from '../../../helpers';

const sleepCache = new Map();
const lastSyncCache = new Map();
const isFetchingCache = new Map();
export default function useSleep(uid: string, day: string | Date) {
    const parsedDay = day instanceof Date ? getFormattedDate(day) : day;
    const key = `${uid}/${parsedDay}`;
    const [sleep, setSleep] = useState<void | object>();
    const lastSyncFitbit = useLastSyncFitbit(uid);

    const fetchSleep = async () => {
        if (isFetchingCache.get(key)) {
            return;
        }
        isFetchingCache.set(key, true);
        const doc = await getDoc({
            path: `users/${uid}/history/${parsedDay}/fitbit/sleep`,
        });
        const data = doc?.data;
        sleepCache.set(key, data);
        lastSyncCache.set(key, lastSyncFitbit);
        isFetchingCache.set(key, false);
        setSleep(data);
    };
    if (lastSyncFitbit) {
        if (sleepCache.has(key)) {
            const lastSync = lastSyncCache.get(key);
            if (isGreaterDateTime(lastSyncFitbit, lastSync)) {
                fetchSleep();
            }
            return sleepCache.get(key);
        } else {
            fetchSleep();
        }
    }
    return sleep;
}
