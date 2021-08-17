import { useState, useEffect } from 'react';
import firebase from 'react-native-firebase';

interface Doc {
    id?: string;
    data?: object;
}

export default function useUserGroups(ids) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>();

    useEffect(() => {
        const promises = ids.map(id => {
            return firebase
                .firestore()
                .doc(`groups/${id}`)
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
        Promise.all(promises).then(groups => setData(groups));
        setIsLoading(false);
    }, [ids]);

    return [data, isLoading];
}
