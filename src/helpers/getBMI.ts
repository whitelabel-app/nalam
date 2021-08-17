export default function getBMI(weightLbs, heightCm) {
    const weightKg = 0.453592 * weightLbs;
    const heightMt = 0.01 * heightCm;
    const bmi = weightKg / Math.pow(heightMt, 2) || 0;
    return bmi.toFixed(2);
}
