import { useCollection } from 'rainbow-firebase-hooks';
import { getFormattedDate } from '../../../helpers';

export default function useBloodPressure(uid: string, day: string | Date) {
    const parsedDay = day instanceof Date ? getFormattedDate(day) : day;
    const [bloodPressure] = useCollection({
        path: `users/${uid}/history/${parsedDay}/bloodPressure`,
        query: ref =>
            ref
                .where('enabled', '==', true)
                .orderBy('dateTime', 'desc')
                .limit(1),
    });
    return bloodPressure;
}
