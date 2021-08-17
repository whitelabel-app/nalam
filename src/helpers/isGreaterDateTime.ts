import stringToDate from './stringToDate';
export default function isGreaterDateTime(date1, date2) {
    const parsedDate1 = date1 instanceof Date ? date1 : stringToDate(date1);
    const parsedDate2 = date2 instanceof Date ? date2 : stringToDate(date2);
    return parsedDate1.getTime() > parsedDate2.getTime();
}
