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

export default function getFormattedWeek(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startMonth = start.getUTCMonth();
    const endMonth = end.getUTCMonth();
    const startDay = start.getUTCDate();
    const endDay = end.getUTCDate();
    if (startMonth === endMonth) {
        return `${monthMap[startMonth]} ${startDay}-${endDay}`;
    }
    return `${monthMap[startMonth]} ${startDay}-${monthMap[endMonth]} ${endDay}`;
}
