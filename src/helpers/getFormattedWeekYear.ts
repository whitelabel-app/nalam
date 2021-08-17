const monthMap = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
};

export default function getFormattedWeekYear(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startYear = start.getUTCFullYear();
    const endYear = end.getUTCFullYear();
    const startMonth = start.getUTCMonth();
    const endMonth = end.getUTCMonth();
    const startDay = start.getUTCDate();
    const endDay = end.getUTCDate();

    const isSameYear = startYear === endYear;
    const isSameMonth = startMonth === endMonth;
    if (isSameYear && isSameMonth) {
        return `${startYear}, ${monthMap[startMonth]} ${startDay} - ${endDay}`;
    }
    if (!isSameYear) {
        return `${startYear}, ${monthMap[startMonth]} ${startDay} - ${endYear}, ${monthMap[endMonth]} ${endDay}`;
    }
    return `${startYear}, ${monthMap[startMonth]} ${startDay} - ${monthMap[endMonth]} ${endDay}`;
}
