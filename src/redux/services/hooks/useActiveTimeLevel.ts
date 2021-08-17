import useHeartRate from './useHeartRate';

export default function useActiveTimeLevel(uid: string, day: string) {
    const heartRateInfo = useHeartRate(uid, day);
    const activeMinutes = heartRateInfo?.activeTime || 0;

    if (activeMinutes <= 14) {
        return 'Low';
    }
    if (activeMinutes >= 15 && activeMinutes <= 40) {
        return 'Good';
    }
    if (activeMinutes >= 41 && activeMinutes < 60) {
        return 'Active';
    }
    if (activeMinutes >= 60) {
        return 'Athletic';
    }
    return 'Low';
}
