import {
    createAddDocAction,
    useCollection,
    createSetDocAction,
} from 'rainbow-firebase-hooks';
import { getFormattedDate } from '../../../helpers';

const weightPathFn = (dateTime: string, uid: string) =>
    `users/${uid}/history/${dateTime}/weight`;

const itemWeightPathFn = (dateTime: string, uid: string, weightId: string) =>
    `${weightPathFn(dateTime, uid)}/${weightId}`;

export default function useWeight(uid: string, day: string | Date) {
    const parsedDay = day instanceof Date ? getFormattedDate(day) : day;
    const [weights] = useCollection({
        path: `users/${uid}/history/${parsedDay}/weight`,
        query: ref => ref.where('enabled', '==', true),
    });
    const [addWeight] = createAddDocAction({
        path: weightPathFn,
    });

    const [setItemWeight] = createSetDocAction({
        path: itemWeightPathFn,
    });
    const weight = weights?.[0] as any;
    const setWeight = newWeight => {
        if (weight?.id) {
            if (!newWeight) {
                setItemWeight(
                    { ...weight?.data, enabled: false },
                    parsedDay,
                    uid,
                    weight.id,
                );
            } else {
                setItemWeight(
                    { ...weight?.data, ...newWeight },
                    parsedDay,
                    uid,
                    weight.id,
                );
            }
        } else {
            addWeight({ ...newWeight, enabled: true }, parsedDay, uid);
        }
    };
    return [weight?.data, setWeight];
}
