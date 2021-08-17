import React from 'react';
import { useDoc, useCollection } from 'rainbow-firebase-hooks';
import { getCurrentUserUid } from '../../../redux/services/auth';
import useUserGroups from '../../../redux/services/groups';
import { getUserInitials } from '../../../helpers';
import {
    ModalContainer,
    UserAvatar,
    CardItem,
    GreenChevronRightIcon,
    CheckmarkIcon,
} from './styled';
import GroupsList from './groupsList';

function getActionIcon(isSelected) {
    if (isSelected) {
        return <CheckmarkIcon />;
    }
    return <GreenChevronRightIcon />;
}

export default function SelectFriendModalContent({ onSelectMember, uid }) {
    const currentUserId = getCurrentUserUid();
    const [profileDoc] = useDoc({
        path: `users/${currentUserId}/profiles/fitbit`,
    });
    const user = profileDoc?.data?.user;
    const avatar = user?.avatar640;

    const [groupIds] = useCollection({
        path: `users/${currentUserId}/groups`,
        onlyIds: true,
    });
    const [groups] = useUserGroups(groupIds);
    const isSelected = currentUserId === uid;

    return (
        <ModalContainer>
            <CardItem
                label="My Activity"
                description="Activities summary"
                action={getActionIcon(isSelected)}
                icon={
                    <UserAvatar
                        size="large"
                        src={avatar}
                        initials={getUserInitials(user)}
                    />
                }
                onPress={() =>
                    onSelectMember({
                        id: currentUserId,
                    })
                }
            />
            <GroupsList
                data={groups}
                currentUserId={currentUserId}
                onSelectMember={onSelectMember}
                uid={uid}
            />
        </ModalContainer>
    );
}
