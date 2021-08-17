import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { useCollection } from 'rainbow-firebase-hooks/build';
import { AddUser, Settings } from '../../../components/Icons';
import { getMembersTitle } from '../../../helpers';
import { useUserProfiles } from '../../../redux/services/users';
import { getCurrentUserUid } from '../../../redux/services/auth';
import { useDocsByIds } from '../../../redux/services/firebase';
import { loadGroupMembers } from '../../../redux/actions/groups';
import useGroupUsers from '../../../redux/services/hooks/useGroupUsers';
import Loading from '../../Loading';
import {
    Header,
    Title,
    HeaderIcon,
    TopContent,
    Gradient,
    Container,
    MembersTitleContainer,
    MembersTitle,
    HeaderButton,
    SwitchLabel,
    RightContent,
} from './styled';
import Members from './members';
import { ButtonIcon } from 'react-native-rainbow';

function getUserIdsFromInvitations(pendingInvitations) {
    return pendingInvitations.map(
        pendingInvitation => pendingInvitation?.data?.inviteeId,
    );
}

function getAllInvitedUsers(
    profiles: any[] = [],
    notUserInvitations: any[] = [],
) {
    return profiles.concat(notUserInvitations);
}

function InviteesList({ groupId }) {
    const [pendingInvitations] = useCollection({
        path: 'invitations',
        query: ref =>
            ref
                .where('groupId', '==', groupId)
                .where('status', '==', 'pending'),
    });
    const [notUserInvitations] = useCollection({
        path: 'invitations',
        query: ref =>
            ref
                .where('groupId', '==', groupId)
                .where('status', '==', 'not-user'),
    });

    const userIds = useMemo(
        () => getUserIdsFromInvitations(pendingInvitations),
        [pendingInvitations],
    );

    const [users] = useDocsByIds({
        collectionPath: 'users',
        ids: userIds,
    });
    const [profiles, isLoading] = useUserProfiles(users);

    const data = useMemo(
        () =>
            getAllInvitedUsers(
                profiles as any[] | undefined,
                notUserInvitations,
            ),
        [notUserInvitations, profiles],
    );

    if (isLoading) {
        return <Loading title="Loading" />;
    }
    return <Members data={data} />;
}

export default function GroupDetailsScreen({ navigation }) {
    const {
        goBack,
        navigate,
        state: {
            params: { group },
        },
    } = navigation;
    const dispatch = useDispatch();
    const { createdBy } = group.data;
    const isOwner = getCurrentUserUid() === createdBy;

    const [switchLabel, setSwitchLabel] = useState('Invitees');
    const isMembersList = switchLabel === 'Invitees';
    const isInviteesList = switchLabel === 'Members';

    const [users, isLoading] = useGroupUsers(group);

    useEffect(() => {
        dispatch(loadGroupMembers(users, group.id));
    }, [dispatch, group.id, users]);

    const handleSwitch = () => {
        setSwitchLabel(switchLabel === 'Invitees' ? 'Members' : 'Invitees');
    };

    const inviteMember = () => {
        navigation.navigate('InviteMember', {
            group,
            users,
        });
    };

    if (isLoading) {
        return <Loading title="Loading" />;
    }

    return (
        <Container>
            <TopContent
                resizeMethod="resize"
                source={require('./images/image.png')}
                imageStyle={{
                    borderBottomRightRadius: 24,
                    borderBottomLeftRadius: 24,
                }}>
                <Gradient>
                    <Header>
                        <HeaderButton
                            icon={<HeaderIcon />}
                            onPress={() => goBack()}
                        />
                        <Title numberOfLines={1}>{group?.data?.name}</Title>
                        <RightContent>
                            <ButtonIcon
                                onPress={() =>
                                    navigation.navigate('GroupSettings')
                                }
                                icon={<HeaderIcon as={Settings} />}
                            />
                            <RenderIf isTrue={isOwner}>
                                <HeaderButton
                                    icon={<HeaderIcon as={AddUser} />}
                                    onPress={inviteMember}
                                />
                            </RenderIf>
                        </RightContent>
                    </Header>
                </Gradient>
            </TopContent>
            <MembersTitleContainer>
                <MembersTitle>{getMembersTitle(users)}</MembersTitle>
                <RenderIf isTrue={isOwner}>
                    <TouchableOpacity onPress={handleSwitch}>
                        <SwitchLabel>{switchLabel}</SwitchLabel>
                    </TouchableOpacity>
                </RenderIf>
            </MembersTitleContainer>
            <RenderIf isTrue={isMembersList}>
                <Members
                    data={users}
                    onSelectMember={member =>
                        navigate('MemberDetails', { member })
                    }
                />
            </RenderIf>
            <RenderIf isTrue={isInviteesList}>
                <InviteesList groupId={group.id} />
            </RenderIf>
        </Container>
    );
}

GroupDetailsScreen.navigationOptions = {
    header: null,
};
