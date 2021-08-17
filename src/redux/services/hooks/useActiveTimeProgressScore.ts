import useHeartRate from './useHeartRate';

const MAX_SCORE = 60;

export default function useActiveTimeProgressScore(uid: string, day: string) {
    const heartRateInfo = useHeartRate(uid, day);
    const activeMinutes = heartRateInfo?.activeTime || 0;
    return (activeMinutes * 100) / MAX_SCORE;
}
