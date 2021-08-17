export default function stringToDate(date: string): Date {
    const splitedString = date.split('-');
    const year = Number(splitedString[0]);
    const month = Number(splitedString[1]) - 1;
    const day = Number(splitedString[2]);

    return new Date(year, month, day);
}
