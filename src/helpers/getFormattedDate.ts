export default function getFormattedDate(date: Date) {
    const year = date.getFullYear();
    const dateMonth = date.getMonth() + 1;
    const month = dateMonth < 10 ? `0${dateMonth}` : dateMonth;
    const dateDay = date.getDate();
    const day = dateDay < 10 ? `0${dateDay}` : dateDay;
    return `${year}-${month}-${day}`;
}
