import { useMemo } from 'react';
import { useCollection } from 'rainbow-firebase-hooks';
import { useDocsByIds } from '../firebase';
import { useUserProfiles } from '../users';

export default function useGroupUsers(group) {
    const { id, data } = group;
    const [userIds] = useCollection({
        path: `groups/${id}/users`,
        onlyIds: true,
    });
    const [users, isLoadingUsers] = useDocsByIds({
        collectionPath: 'users',
        ids: userIds,
    });
    const [profiles, isLoadingProfiles] = useUserProfiles(users);

    const orderedProfiles = useMemo(() => {
        if (profiles) {
            const newArr = [...profiles];
            return newArr.sort((a, b) => {
                if (b.id === data.createdBy) {
                    return 1;
                }
                return -1;
            });
        }
        return [];
    }, [data.createdBy, profiles]);

    const isLoading = isLoadingUsers || isLoadingProfiles;
    return [orderedProfiles, isLoading];
}
