export default function getMealTimeLabel(mealTimeValue) {
    const mealTimeLabelMap = {
        unspecified: 'Unspecified',
        before: 'Before Meal',
        after: 'After Meal',
    };

    return mealTimeLabelMap[mealTimeValue];
}
