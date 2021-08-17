import useSleep from './useSleep';

export default function useSleepHours(uid: string, day: string) {
    const sleep = useSleep(uid, day);
    return Math.floor((sleep?.summary?.totalMinutesAsleep || 0) / 60);
}
