import stringToDate from './stringToDate';
export default function isEqualDate(date1: Date, date2: Date): boolean {
    const parsedDate1 = date1 instanceof Date ? date1 : stringToDate(date1);
    const parsedDate2 = date2 instanceof Date ? date2 : stringToDate(date2);
    return (
        parsedDate1.getFullYear() === parsedDate2.getFullYear() &&
        parsedDate1.getMonth() === parsedDate2.getMonth() &&
        parsedDate1.getDate() === parsedDate2.getDate()
    );
}
