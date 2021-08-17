import { useState, useEffect } from 'react';
import firebase from 'react-native-firebase';
import getFormattedDate from '../../../helpers/getFormattedDate';

interface UpdateDoc {
    path: string;
    data: {
        [key: string]: any;
    };
}

export function updateDoc(params: UpdateDoc): Promise<void> {
    const { data, path } = params;
    return firebase
        .firestore()
        .doc(path)
        .update({
            ...data,
            modifiedAt: new Date(),
        });
}

interface GetDoc {
    path: string;
}

interface Doc {
    id: string;
    data: object | void;
}

export function getDoc(params: GetDoc): Promise<Doc | null> {
    const { path } = params;
    return firebase
        .firestore()
        .doc(path)
        .get()
        .then(doc => {
            if (doc.exists) {
                return {
                    id: doc.id,
                    data: doc.data(),
                };
            }
            return null;
        });
}

export function listenDoc(params) {
    const { path, callback } = params;
    return firebase
        .firestore()
        .doc(path)
        .onSnapshot(doc => {
            if (doc.exists) {
                return callback({
                    id: doc.id,
                    data: doc.data(),
                });
            }
            return callback(null);
        });
}

export function useDocsByIds({ collectionPath, ids }) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<object>();

    useEffect(() => {
        if (ids.length) {
            const promises = ids.map(id => {
                return firebase
                    .firestore()
                    .doc(`${collectionPath}/${id}`)
                    .get()
                    .then(doc => {
                        if (doc.exists) {
                            return {
                                id: doc.id,
                                data: doc.data(),
                            };
                        }
                        return null;
                    });
            });
            Promise.all(promises).then(docs => {
                setData(docs.filter(doc => !!doc));
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
        }
    }, [collectionPath, ids]);

    return [data, isLoading];
}

interface GetWeightParams {
    uid: string;
    date: string | Date;
}

export default async function getWeight({
    uid,
    date,
}: GetWeightParams): Promise<Doc | null> {
    const parsedDay = date instanceof Date ? getFormattedDate(date) : date;

    const collection = await firebase
        .firestore()
        .collection(`users/${uid}/history/${parsedDay}/weight`)
        .where('enabled', '==', true)
        .get();

    if (collection.empty) {
        return null;
    }
    return collection.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
    }))[0];
}
