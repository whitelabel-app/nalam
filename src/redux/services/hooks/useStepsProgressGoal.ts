import useActivities from './useActivities';

export default function useStepsProgressGoal(uid: string, day: string) {
    const activities = useActivities(uid, day);
    const stepsGoal = activities?.goals?.steps;
    const steps = activities?.summary?.steps;
    return (steps * 100) / stepsGoal;
}
