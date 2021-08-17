import useActivities from './useActivities';

export default function useSteps(uid: string, day: string | Date) {
    const activities = useActivities(uid, day);
    return activities?.summary?.steps || 0;
}
