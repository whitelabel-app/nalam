import { useCollection } from 'rainbow-firebase-hooks';
import { getFormattedDate } from '../../../helpers';

export default function useBloodSugar(uid: string, day: string | Date) {
    const parsedDay = day instanceof Date ? getFormattedDate(day) : day;
    const [bloodSuggar] = useCollection({
        path: `users/${uid}/history/${parsedDay}/bloodSugar`,
        query: ref =>
            ref
                .where('enabled', '==', true)
                .orderBy('dateTime', 'desc')
                .limit(1),
    });
    return bloodSuggar;
}
