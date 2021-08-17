export default function getDateWithCurrentTime(date?: Date) {
    if (!date) {
        return undefined;
    }
    const currentDate = new Date();
    currentDate.setFullYear(date.getFullYear());
    currentDate.setMonth(date.getMonth());
    currentDate.setDate(date.getDate());
    return currentDate;
}
