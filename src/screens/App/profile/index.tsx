import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useDoc } from 'rainbow-firebase-hooks';
import { FormattedDate } from 'react-intl';
import { logout } from '../../../redux/actions/auth';
import { getCurrentUserUid } from '../../../redux/services/auth';
import { StyledUserBorder, StyledUserFilled } from '../styled';
import ListItem from '../../../components/ListItem';
import { AddDevice } from '../../../components/Icons';
import { getUserInitials } from '../../../helpers';
import {
    Container,
    TopContent,
    TopBar,
    UserAvatar,
    Background,
    Title,
    DescriptionContainer,
    Description,
    PhoneIcon,
    ListContainer,
    LogoutItem,
    LogoutText,
    ChevronRightIcon,
    Divider,
    IconContainer,
    ListIcon,
    Gradient,
    StyledDescription,
} from './styled';

function getSyncDateTime(date) {
    if (date) {
        const todayTimestamp = new Date().setHours(0, 0, 0, 0);
        const syncDate = new Date(date);
        const syncDateTimestamp = date.setHours(0, 0, 0, 0);
        const today = new Date(todayTimestamp);

        if (syncDateTimestamp === todayTimestamp) {
            const text = 'Synced today, ';
            return (
                <StyledDescription>
                    {text}
                    <FormattedDate
                        value={syncDate}
                        hour="numeric"
                        minute="numeric"
                    />
                </StyledDescription>
            );
        }
        const yesterdayTimestamp = today.setDate(today.getDate() - 1);
        if (syncDateTimestamp === yesterdayTimestamp) {
            const text = 'Synced yesterday, ';
            return (
                <StyledDescription>
                    {text}
                    <FormattedDate
                        value={syncDate}
                        hour="numeric"
                        minute="numeric"
                    />
                </StyledDescription>
            );
        }
        const text = 'Synced ';
        return (
            <StyledDescription>
                {text}
                <FormattedDate
                    value={syncDate}
                    day="numeric"
                    month="short"
                    hour="numeric"
                    minute="numeric"
                />
            </StyledDescription>
        );
    }
    return null;
}

export default function Profile({ navigation }) {
    const uid = getCurrentUserUid();
    const [userDoc] = useDoc({
        path: `users/${uid}`,
    });
    const user = useSelector(state => state.app.profile);
    const avatar = user?.avatar640;

    return (
        <Container>
            <TopContent>
                <Background
                    resizeMethod="resize"
                    source={require('./images/image.png')}>
                    <Gradient>
                        <TopBar />
                    </Gradient>
                </Background>
                <UserAvatar
                    size="large"
                    src={avatar}
                    initials={getUserInitials(user)}
                />
                <Title>{user?.fullName}</Title>
                <DescriptionContainer>
                    <PhoneIcon />
                    <Description>{userDoc?.data?.phoneNumber}</Description>
                </DescriptionContainer>
            </TopContent>
            <ScrollView
                contentContainerStyle={{
                    justifyContent: 'space-between',
                    flexGrow: 1,
                }}>
                <ListContainer>
                    <ListItem
                        label="Your Device"
                        description={getSyncDateTime(
                            userDoc?.data?.lastSyncFitbit?.toDate(),
                        )}
                        icon={
                            <IconContainer>
                                <ListIcon />
                            </IconContainer>
                        }
                    />
                    <Divider />
                    <ListItem
                        label="Connect New Device"
                        description="Add a new device"
                        action={<ChevronRightIcon />}
                        onPress={() =>
                            navigation.navigate('RegisterDevice', {
                                goBack: true,
                            })
                        }
                        icon={
                            <IconContainer>
                                <ListIcon as={AddDevice} />
                            </IconContainer>
                        }
                    />
                </ListContainer>
                <LogoutItem>
                    <TouchableOpacity onPress={logout}>
                        <LogoutText>Logout</LogoutText>
                    </TouchableOpacity>
                </LogoutItem>
            </ScrollView>
        </Container>
    );
}

Profile.navigationOptions = {
    tabBarIcon: ({ focused }) => {
        if (focused) {
            return <StyledUserFilled />;
        }
        return <StyledUserBorder />;
    },
};
