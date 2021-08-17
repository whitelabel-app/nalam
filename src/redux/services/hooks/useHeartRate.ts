import { useState } from 'react';
import useLastSyncFitbit from './useLastSyncFitbit';
import { getDoc } from '../firebase';
import {
    isGreaterDateTime,
    getFormattedDate,
    getHeartRateFormattedData,
} from '../../../helpers';

const heartRateCache = new Map();
const lastSyncCache = new Map();
const isFetchingCache = new Map();

const getReastigHeartRate = heartRateData =>
    heartRateData?.['activities-heart']?.[0]?.value?.restingHeartRate;

const getUserInfo = (userProfileData, heartRateData) => {
    return {
        age: userProfileData?.user?.age,
        gender: userProfileData?.user?.gender,
        rhr: getReastigHeartRate(heartRateData),
    };
};

const getHeartRateIntraday = heartRateDoc =>
    heartRateDoc?.data?.['activities-heart-intraday']?.dataset;

export default function useHeartRate(uid: string, day: string | Date) {
    const parsedDay = day instanceof Date ? getFormattedDate(day) : day;
    const key = `${uid}/${parsedDay}`;
    const [heartRate, setHeartRate] = useState<void | object>();
    const lastSyncFitbit = useLastSyncFitbit(uid);

    const fetchHeartRate = async () => {
        if (isFetchingCache.get(key)) {
            return;
        }
        isFetchingCache.set(key, true);
        const heartRateDoc = await getDoc({
            path: `users/${uid}/history/${parsedDay}/fitbit/heartRate`,
        });
        const profileDoc = await getDoc({
            path: `users/${uid}/profiles/fitbit`,
        });
        const userInfo = getUserInfo(profileDoc?.data, heartRateDoc?.data);
        const heartRateIntraday = getHeartRateIntraday(heartRateDoc);
        const data = getHeartRateFormattedData(heartRateIntraday, userInfo);
        heartRateCache.set(key, data);
        lastSyncCache.set(key, lastSyncFitbit);
        isFetchingCache.set(key, false);
        setHeartRate(data);
    };
    if (lastSyncFitbit) {
        if (heartRateCache.has(key)) {
            const lastSync = lastSyncCache.get(key);
            if (isGreaterDateTime(lastSyncFitbit, lastSync)) {
                fetchHeartRate();
            }
            return heartRateCache.get(key);
        } else {
            fetchHeartRate();
        }
    }
    return heartRate;
}
