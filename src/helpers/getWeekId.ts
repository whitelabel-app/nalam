import getFormattedDate from './getFormattedDate';
interface DateRange {
    startDate: Date;
    endDate: Date;
}

function getLastWeekRange(date: Date): DateRange {
    const lastSunday = date;
    lastSunday.setDate(
        date.getDate() - (date.getDay() === 0 ? 7 : date.getDay()),
    );
    const lastMonday = new Date(lastSunday);
    lastMonday.setDate(lastSunday.getDate() - 6);
    return {
        startDate: lastMonday,
        endDate: lastSunday,
    };
}

export default function getWeekId(date?: Date): string {
    const { startDate, endDate } = getLastWeekRange(date || new Date());
    return `${getFormattedDate(startDate)}_${getFormattedDate(endDate)}`;
}
