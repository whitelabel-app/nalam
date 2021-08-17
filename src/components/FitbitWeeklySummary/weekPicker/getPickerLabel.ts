import { getFormattedWeekYear } from '../../../helpers';

export default function getPickerLabel(week, isLastWeek) {
    if (isLastWeek) {
        return 'LAST WEEK';
    }
    const datesArray = week.split('_');
    return getFormattedWeekYear(datesArray[0], datesArray[1]);
}
