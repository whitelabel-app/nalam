import stringToDate from './stringToDate';
import isEqualDate from './isEqualDate';
import isGreaterDateTime from './isGreaterDateTime';
export default function isAfterOrEqualDate(
    date1: string | Date,
    date2: string | Date,
): boolean {
    const parsedDate1 = date1 instanceof Date ? date1 : stringToDate(date1);
    const parsedDate2 = date2 instanceof Date ? date2 : stringToDate(date2);

    return (
        isEqualDate(parsedDate1, parsedDate2) ||
        isGreaterDateTime(parsedDate1, parsedDate2)
    );
}
