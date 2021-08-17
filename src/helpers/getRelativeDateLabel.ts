export default function getRelativeDateLabel(date, intlProvider) {
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const dateTimestamp = date.getTime();
    const todayTimestamp = today.getTime();
    if (dateTimestamp === todayTimestamp) {
        return 'Today';
    }
    const yesterdayTimestamp = today.setDate(today.getDate() - 1);
    if (dateTimestamp === yesterdayTimestamp) {
        return 'Yesterday';
    }
    return intlProvider.formatDate(date, {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
}
