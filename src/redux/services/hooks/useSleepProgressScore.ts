import useSleep from './useSleep';

const MAX_SCORE = 7;

export default function useSleepProgressScore(uid: string, day: string) {
    const sleep = useSleep(uid, day);
    const hours = Math.floor((sleep?.summary?.totalMinutesAsleep || 0) / 60);
    return Math.floor((hours * 100) / MAX_SCORE);
}
