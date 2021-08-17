export default function getFormattedTimeFromMin(minutes) {
    if (minutes >= 0) {
        const hours = Math.floor(minutes / 60);
        const min = minutes % 60;

        return `${hours}hr ${min}min`;
    }
    return '';
}
