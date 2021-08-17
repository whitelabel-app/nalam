import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { markUnreadNotificationsAsRead } from '../../../redux/actions/notifications';
import {
    Header,
    Title,
    HeaderIcon,
    Container,
    BackButton,
    RightElement,
} from './styled';
import Notifications from './notifications';

export default function NotificationsScreen({ navigation }) {
    const { goBack } = navigation;
    const { all, unread } = useSelector(state => state.notifications);

    useEffect(() => {
        return () => {
            markUnreadNotificationsAsRead(unread);
        };
    }, [navigation, unread]);

    return (
        <Container>
            <Header>
                <BackButton icon={<HeaderIcon />} onPress={() => goBack()} />
                <Title numberOfLines={1}>Notifications</Title>
                <RightElement>More</RightElement>
            </Header>
            <Notifications data={all} navigation={navigation} />
        </Container>
    );
}

NotificationsScreen.navigationOptions = {
    header: null,
};
