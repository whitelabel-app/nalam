import getBMI from './getBMI';
export default function getWeightMood(heightCm, weightLb) {
    const bmi = Number(getBMI(weightLb, heightCm));
    if (bmi <= 18.5) {
        return 'Underweight';
    } else if (bmi <= 24.9) {
        return 'Healthy';
    } else if (bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
