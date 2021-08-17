import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDoc, useCollection } from 'rainbow-firebase-hooks';
import { FormattedDate } from 'react-intl';
import { Text, SafeAreaView, View, Modal, Platform } from 'react-native';
import NativeModal from 'react-native-modal';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { getCurrentUserUid } from '../../../redux/services/auth';
import { loadNotifications } from '../../../redux/actions/notifications';
import { loadUserProfile } from '../../../redux/actions/app';
import useLastSyncFitbit from '../../../redux/services/hooks/useLastSyncFitbit';
import { StyledDashboardBorder, StyledDashboardFilled } from '../styled';
import {
    Container,
    TopContent,
    UserSelector,
    Notification,
    UserAvatar,
    UserText,
    ChevronDownIcon,
    HeaderContainer,
    DescriptionText,
    TopBar,
    Header,
    CloseButton,
    StyledCloseIcon,
    RightElement,
    CalendarButton,
    CalendarBorderIcon,
} from './styled';
import SelectFriendModalContent from './selectFriendModalContent';
import FitbitHistory from '../../../components/FitbitHistory';
import FitbitWeeklySummary from '../../../components/FitbitWeeklySummary';
import { getUserInitials, getWeekId } from '../../../helpers';
import SelectViewType from './selectViewType';

function getSyncDateTime(date) {
    if (date) {
        const todayTimestamp = new Date().setHours(0, 0, 0, 0);
        const syncDate = new Date(date);
        const syncDateTimestamp = new Date(date).setHours(0, 0, 0, 0);
        const today = new Date(todayTimestamp);

        if (syncDateTimestamp === todayTimestamp) {
            const text = 'Synced today, ';
            return (
                <Text>
                    {text}
                    <FormattedDate
                        value={syncDate}
                        hour="numeric"
                        minute="numeric"
                    />
                </Text>
            );
        }
        const yesterdayTimestamp = today.setDate(today.getDate() - 1);
        if (syncDateTimestamp === yesterdayTimestamp) {
            const text = 'Synced yesterday, ';
            return (
                <Text>
                    {text}
                    <FormattedDate
                        value={syncDate}
                        hour="numeric"
                        minute="numeric"
                    />
                </Text>
            );
        }
        const text = 'Synced ';
        return (
            <Text>
                {text}
                <FormattedDate
                    value={syncDate}
                    day="numeric"
                    month="short"
                    hour="numeric"
                    minute="numeric"
                />
            </Text>
        );
    }
    return null;
}

export default function Dashboard({ navigation }) {
    const dispatch = useDispatch();
    const [isOpenSelectFriend, setIsOpenSelectFriend] = useState(false);
    const [isOpenSelectViewType, setIsOpenSelectViewType] = useState(false);
    const [selectedMember, setMember] = useState<any>();
    const [uid, setUid] = useState(getCurrentUserUid());
    const [viewType, setViewType] = useState('daily');
    const isDaily = viewType === 'daily';
    const isWeekly = viewType === 'weekly';

    const [profileDoc] = useDoc({
        path: `users/${uid}/profiles/fitbit`,
    });
    useEffect(() => {
        if (uid === getCurrentUserUid()) {
            dispatch(loadUserProfile(profileDoc?.data?.user));
        }
    }, [dispatch, profileDoc, uid]);

    const userProfile = profileDoc?.data?.user;
    const avatar = userProfile?.avatar640;
    const activityTitle =
        uid === getCurrentUserUid()
            ? 'My Activity'
            : selectedMember?.data?.user?.fullName;

    const lastSyncFitbit = useLastSyncFitbit(uid);

    const [notifications] = useCollection({
        path: `users/${getCurrentUserUid()}/notifications`,
        query: ref => ref.orderBy('createdAt', 'desc'),
    });

    useEffect(() => {
        dispatch(loadNotifications(notifications));
    }, [dispatch, notifications]);

    const unreadNotifications = useSelector(
        state => state.notifications.unread.length,
    );

    const selectMember = member => {
        setIsOpenSelectFriend(false);
        setMember(member);
        if (Platform.OS === 'android') {
            setUid(member.id);
        }
    };

    const selectViewType = value => {
        setViewType(value);
        setIsOpenSelectViewType(false);
    };

    return (
        <Container>
            <TopContent>
                <TopBar>
                    <UserSelector onPress={() => setIsOpenSelectFriend(true)}>
                        <UserAvatar
                            size="large"
                            src={avatar}
                            initials={getUserInitials(userProfile)}
                        />
                        <HeaderContainer>
                            <Header>
                                <UserText numberOfLines={1}>
                                    {activityTitle}
                                </UserText>
                                <ChevronDownIcon />
                            </Header>
                            <DescriptionText numberOfLines={1}>
                                {getSyncDateTime(lastSyncFitbit)}
                            </DescriptionText>
                        </HeaderContainer>
                    </UserSelector>
                    <RightElement>
                        <CalendarButton
                            icon={<CalendarBorderIcon />}
                            onPress={() => setIsOpenSelectViewType(true)}
                        />
                        <Notification
                            unreadAmount={unreadNotifications}
                            onPress={() => navigation.navigate('Notifications')}
                        />
                    </RightElement>
                </TopBar>
            </TopContent>
            <RenderIf isTrue={isDaily}>
                <FitbitHistory
                    navigation={navigation}
                    uid={uid}
                    isFirstTime={!selectedMember}
                />
            </RenderIf>
            <RenderIf isTrue={isWeekly}>
                <FitbitWeeklySummary
                    hasPicker
                    memberSince={userProfile?.memberSince}
                    navigation={navigation}
                    uid={uid}
                    weekDateRange={getWeekId()}
                />
            </RenderIf>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isOpenSelectFriend}
                onRequestClose={() => setIsOpenSelectFriend(false)}
                onDismiss={() => {
                    if (selectedMember) {
                        setUid(selectedMember.id);
                    }
                }}>
                <SafeAreaView style={{ flex: 1, marginBottom: 74 }}>
                    <View>
                        <CloseButton
                            icon={<StyledCloseIcon />}
                            onPress={() => setIsOpenSelectFriend(false)}
                        />
                        <SelectFriendModalContent
                            onSelectMember={selectMember}
                            uid={uid}
                        />
                    </View>
                </SafeAreaView>
            </Modal>
            <NativeModal
                isVisible={isOpenSelectViewType}
                // TODO: remove inline styles
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
                swipeDirection="down"
                onBackdropPress={() => setIsOpenSelectViewType(false)}
                onSwipeComplete={() => setIsOpenSelectViewType(false)}>
                <SelectViewType value={viewType} onChange={selectViewType} />
            </NativeModal>
        </Container>
    );
}

Dashboard.navigationOptions = {
    tabBarIcon: ({ focused }) => {
        if (focused) {
            return <StyledDashboardFilled />;
        }
        return <StyledDashboardBorder />;
    },
};
