import moment from 'moment';
import getFormattedWeek from './getFormattedWeek';

export default function getWeekRangeLabel(date) {
    const today = new Date();
    const isThisWeek = moment(date).isSame(today, 'isoWeek');
    if (isThisWeek) {
        return 'This Week';
    }
    const startOfWeek = moment(date)
        .startOf('isoWeek')
        .toString();
    const endOfWeek = moment(date)
        .endOf('isoWeek')
        .subtract(1, 'day')
        .toString();
    return getFormattedWeek(startOfWeek, endOfWeek);
}
