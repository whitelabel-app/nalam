import useSteps from './useSteps';

export default function useStepsLevel(uid: string, day: string) {
    const steps = useSteps(uid, day);
    if (steps <= 4999) {
        return 'Low';
    }
    if (steps >= 5000 && steps <= 7499) {
        return 'Moderate';
    }
    if (steps >= 7500 && steps <= 9999) {
        return 'Good';
    }
    if (steps >= 10000 && steps <= 12499) {
        return 'Active';
    }
    if (steps > 12499) {
        return 'Highly active';
    }
    return 'Low';
}
