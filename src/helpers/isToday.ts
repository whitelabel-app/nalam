import getFormattedDate from './getFormattedDate';
export default function isToday(date: Date | string) {
    const parsedDay = date instanceof Date ? getFormattedDate(date) : date;
    return getFormattedDate(new Date()) === parsedDay;
}
