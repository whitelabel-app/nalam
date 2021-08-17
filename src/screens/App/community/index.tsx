import React, { useState } from 'react';
import { ScrollView, Modal } from 'react-native';
import { Badge, ButtonIcon } from 'react-native-rainbow';
import {
    createAddDocAction,
    createSetDocAction,
    useCollection,
} from 'rainbow-firebase-hooks';
import { StyledCommunityBorder, StyledCommunityFilled } from '../styled';
import {
    Container,
    TopContent,
    TopBar,
    Notification,
    GreenHeaderIcon,
    SectionHeaderContainer,
    Title,
    Header,
} from './styled';
import GroupList from './groupsList';
import AddNewGroupForm from './addNewGroupForm';
import useUserGroups from '../../../redux/services/groups';
import { getCurrentUserUid } from '../../../redux/services/auth';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';

const userGroupPathFn = (userId, groupId) =>
    `users/${userId}/groups/${groupId}`;
const groupUserPathFn = (userId, groupId) =>
    `groups/${groupId}/users/${userId}`;

export default function Community({ navigation }) {
    const [isOpen, setIsOpen] = useState(false);
    const [addGroup, isLoading] = createAddDocAction({ path: 'groups' });
    const [setUserGroupEntry] = createSetDocAction({
        path: userGroupPathFn,
    });
    const [setGroupUserEntry] = createSetDocAction({
        path: groupUserPathFn,
    });
    const uid = getCurrentUserUid();
    const [groupIds] = useCollection({
        path: `users/${uid}/groups`,
        onlyIds: true,
    });
    const [groups] = useUserGroups(groupIds);
    const groupsAmount = (groups as boolean)
        ? ((groups as unknown) as any[])?.length
        : 0;
    const showBadge = groupsAmount > 1;

    const createNewGroup = async values => {
        const groupDoc = await addGroup(values);
        setUserGroupEntry({}, uid, groupDoc.id);
        setGroupUserEntry({}, uid, groupDoc.id);
    };

    return (
        <Container>
            <TopContent>
                <TopBar>
                    <ButtonIcon
                        onPress={() => setIsOpen(true)}
                        icon={<GreenHeaderIcon />}
                    />
                    <Header>Community</Header>
                    <Notification
                        onPress={() => navigation.navigate('Notifications')}
                    />
                </TopBar>
            </TopContent>
            <SectionHeaderContainer>
                <Title>favorite groups</Title>
                <RenderIf isTrue={showBadge}>
                    <Badge label={groupsAmount} />
                </RenderIf>
            </SectionHeaderContainer>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <GroupList
                    groups={(groups as unknown) as any[]}
                    navigation={navigation}
                />
            </ScrollView>
            <Modal visible={isOpen} animationType="slide">
                <AddNewGroupForm
                    onRequestClose={() => setIsOpen(false)}
                    onSubmit={createNewGroup}
                    isLoading={isLoading}
                />
            </Modal>
        </Container>
    );
}

Community.navigationOptions = {
    tabBarIcon: ({ focused }) => {
        if (focused) {
            return <StyledCommunityFilled />;
        }
        return <StyledCommunityBorder />;
    },
};
