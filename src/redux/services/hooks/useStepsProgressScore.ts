import useSteps from './useSteps';

const MAX_SCORE = 12500;

export default function useStepsProgressScore(uid: string, day: string) {
    const steps = useSteps(uid, day);
    return (steps * 100) / MAX_SCORE;
}
