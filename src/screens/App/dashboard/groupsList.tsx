import React from 'react';
import { FlatList } from 'react-native';
import { Badge, Avatar } from 'react-native-rainbow';
import useGroupUsers from '../../../redux/services/hooks/useGroupUsers';
import {
    getKeyExtractor,
    getMembersTitle,
    getUserInitials,
} from '../../../helpers';
import {
    SectionHeaderContainer,
    Title,
    MemberItem,
    ChevronRightIcon,
    CheckmarkIcon,
} from './styled';

function Member(props) {
    const { item, currentUserId, onSelectMember, uid } = props;
    const profile = item?.data?.user;
    const { avatar640, fullName } = profile;
    const phoneNumber = item?.data?.phoneNumber;

    if (currentUserId === item.id) {
        return null;
    }
    const isSelected = uid === item.id;
    const actionIcon = isSelected ? <CheckmarkIcon /> : <ChevronRightIcon />;
    return (
        <MemberItem
            label={fullName}
            description={phoneNumber}
            action={actionIcon}
            icon={
                <Avatar
                    size="large"
                    src={avatar640}
                    initials={getUserInitials(profile)}
                />
            }
            onPress={() => onSelectMember(item)}
        />
    );
}

function Group(props) {
    const { item, currentUserId, onSelectMember, uid } = props;
    const { name } = item.data;
    const [users] = useGroupUsers(item);

    if ((users as any).length > 1) {
        return (
            <>
                <SectionHeaderContainer>
                    <Title>{name}</Title>
                    <Badge label={getMembersTitle(users)} />
                </SectionHeaderContainer>
                <FlatList
                    data={users as any}
                    renderItem={currentProps => (
                        <Member
                            {...currentProps}
                            currentUserId={currentUserId}
                            onSelectMember={onSelectMember}
                            uid={uid}
                        />
                    )}
                    keyExtractor={getKeyExtractor}
                />
            </>
        );
    }
    return null;
}

const styles = {
    backgroundColor: 'rgba(244, 246, 249, 0.4)',
    borderBottomColor: 'rgba(82, 95, 127, 0.1)',
    borderBottomWidth: 0.5,
    borderTopColor: 'rgba(82, 95, 127, 0.1)',
    borderTopWidth: 0.5,
    marginTop: 16,
    paddingBottom: 160,
};

export default function GroupsList(props) {
    const { data, currentUserId, onSelectMember, uid } = props;
    return (
        <FlatList
            contentContainerStyle={styles}
            data={data}
            renderItem={({ item }) => (
                <Group
                    item={item}
                    currentUserId={currentUserId}
                    onSelectMember={onSelectMember}
                    uid={uid}
                />
            )}
            keyExtractor={getKeyExtractor}
        />
    );
}
