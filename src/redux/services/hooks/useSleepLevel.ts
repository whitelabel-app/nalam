import useSleep from './useSleep';

export default function useSleepLevel(uid: string, day: string) {
    const sleep = useSleep(uid, day);
    const hours = Math.floor((sleep?.summary?.totalMinutesAsleep || 0) / 60);

    if (hours < 5) {
        return 'Low';
    }
    if (hours === 5 || hours === 6) {
        return 'Fair';
    }
    if (hours >= 7) {
        return 'Good';
    }
    return 'Low';
}
