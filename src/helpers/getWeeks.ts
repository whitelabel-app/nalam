import getFormattedDate from './getFormattedDate';

function addDays(date, days) {
    const ret = new Date(date);
    ret.setDate(ret.getDate() + days);
    return new Date(ret);
}

function getStartDate(startDate) {
    const date = new Date(startDate);
    return new Date(date.setDate(date.getDate() + 7));
}

export default function getWeeks(startDate, endDate = new Date()) {
    const weeks: string[] = [];
    let date = getStartDate(startDate);
    const dayOfWeek = date.getDay() - 1;
    const daysAfter = 6 - dayOfWeek;
    let lastMonday = new Date(endDate);
    const prevMonday = new Date(
        lastMonday.setDate(
            lastMonday.getDate() - ((lastMonday.getDay() + 6) % 7),
        ),
    );

    while (date <= prevMonday) {
        const firstWeekDay = addDays(date, -dayOfWeek);
        const lastWeekDay = addDays(date, daysAfter);

        weeks.push(
            `${getFormattedDate(firstWeekDay)}_${getFormattedDate(
                lastWeekDay,
            )}`,
        );

        date = addDays(date, 7);
    }
    return weeks.reverse();
}
