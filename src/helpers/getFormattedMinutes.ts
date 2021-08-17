export default function getFormattedMinutes(minutes) {
    if (minutes >= 0) {
        const hours = Math.floor(minutes / 60);
        const min = minutes % 60;

        return { hours, minutes: min };
    }
    return { hours: 0, minutes: 0 };
}
