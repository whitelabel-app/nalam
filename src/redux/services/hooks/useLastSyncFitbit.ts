import { useState } from 'react';
import { listenDoc } from '../firebase';

const lastSyncCache = new Map();
const isListening = new Map();

export default function useLastSyncFitbit(uid) {
    const [lastSync, setLastSync] = useState();
    if (lastSync && lastSyncCache.has(uid)) {
        return lastSyncCache.get(uid);
    }
    if (lastSyncCache.has(uid)) {
        setLastSync(lastSyncCache.get(uid));
    }
    if (!isListening.has(uid)) {
        isListening.set(uid, true);
        listenDoc({
            path: `users/${uid}`,
            callback: doc => {
                if (
                    doc &&
                    doc.data &&
                    doc.data.lastSyncFitbit &&
                    typeof doc.data.lastSyncFitbit === 'function'
                ) {
                    const newLastSync = doc.data.lastSyncFitbit.toDate();
                    lastSyncCache.set(uid, newLastSync);
                    setLastSync(newLastSync);
                }
            },
        });
    }
    return lastSync;
}
