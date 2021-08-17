import moment from 'moment';

function getMondayBasedDayNumber(date) {
    if (date.getDay() === 0) {
        return 6;
    }
    return date.getDay() - 1;
}

function subtractDays(date, days) {
    const ret = new Date(date);
    ret.setDate(ret.getDate() - days);
    return new Date(ret);
}

export default function getWeekDays(date) {
    const today = new Date();
    const isThisWeek = moment(date).isSame(today, 'isoWeek');
    if (isThisWeek) {
        const daysAmount = getMondayBasedDayNumber(today) + 1;
        return Array(daysAmount)
            .fill('')
            .map((item, index) => {
                return subtractDays(today, index);
            });
    }
    const endOfWeek = moment(date)
        .endOf('isoWeek')
        .toDate();
    return Array(7)
        .fill('')
        .map((item, index) => {
            return subtractDays(endOfWeek, index);
        });
}
