import React from 'react';
import { FlatList } from 'react-native';
import { Avatar, LikeButton } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { FormattedDate } from 'react-intl';
import {
    confirmInvitationToGroup,
    denyInvitationToGroup,
} from '../../../redux/actions/notifications';
import { markNotificationAsRead } from '../../../redux/services/notifications';
import { getKeyExtractor, getWeekId, getFormattedWeek } from '../../../helpers';
import {
    ActionsContainer,
    ButtonActions,
    Notification,
    BadgeContainer,
    BadgeDoneIcon,
    BadgeCancelIcon,
    BadgeText,
    EmptyMessageContainer,
    NotificationIcon,
    MessageTitle,
    MessageDescription,
    CalendarIcon,
} from './styled';
import { useDocOnce } from 'rainbow-firebase-hooks';

const confirmActionMap = {
    invitation: confirmInvitationToGroup,
};

const denyActionMap = {
    invitation: denyInvitationToGroup,
};

const flatListStyles = {
    paddingBottom: 20,
};

function NotificationItem({ item, navigation }) {
    const {
        createdAt,
        type,
        status,
        isRead,
        groupName,
        ownerName,
        ownerAvatar,
    } = item.data;
    const showActions = type === 'invitation' && status === 'pending';
    const isAccepted = status === 'accepted';
    const isDenied = status === 'denied';
    const content = `${ownerName} send you an invitation for join to the "${groupName}" group.`;

    if (type === 'reaction') {
        return <ReactionNotification item={item} />;
    }

    if (type === 'weekly_summary') {
        const { weekDateRange } = item.data;
        const datesArray = (weekDateRange as string).split('_');
        const formattedWeek = getFormattedWeek(datesArray[0], datesArray[1]);
        const summaryContent =
            getWeekId() === weekDateRange
                ? 'Last Week Summary'
                : `Weekly Summary ${formattedWeek}`;
        return (
            <Notification
                isRead={isRead}
                icon={<CalendarIcon />}
                date={
                    <FormattedDate
                        value={createdAt.toDate()}
                        year="numeric"
                        month="short"
                        day="2-digit"
                        hour="numeric"
                        minute="numeric"
                    />
                }
                content={summaryContent}
                description="Your weekly progress report."
                onPress={() => {
                    if (!isRead) {
                        markNotificationAsRead(item.id);
                    }
                    return navigation.navigate('WeeklySummary', {
                        weekDateRange,
                        formattedWeek,
                    });
                }}
            />
        );
    }

    return (
        <Notification
            isRead={isRead}
            icon={<Avatar size="large" src={ownerAvatar} />}
            date={
                <FormattedDate
                    value={createdAt.toDate()}
                    year="numeric"
                    month="short"
                    day="2-digit"
                    hour="numeric"
                    minute="numeric"
                />
            }
            content={content}
            actions={
                <>
                    <RenderIf isTrue={showActions}>
                        <ActionsContainer>
                            <ButtonActions
                                variant="brand"
                                label="Confirm"
                                onPress={() => confirmActionMap[type](item)}
                            />
                            <ButtonActions
                                variant="outline-brand"
                                label="Delete"
                                onPress={() => denyActionMap[type](item)}
                            />
                        </ActionsContainer>
                    </RenderIf>
                    <RenderIf isTrue={isAccepted}>
                        <BadgeContainer>
                            <BadgeDoneIcon />
                            <BadgeText>Accepted</BadgeText>
                        </BadgeContainer>
                    </RenderIf>
                    <RenderIf isTrue={isDenied}>
                        <BadgeContainer>
                            <BadgeCancelIcon />
                            <BadgeText>Canceled</BadgeText>
                        </BadgeContainer>
                    </RenderIf>
                </>
            }
        />
    );
}

const ReactionNotification = ({ item }) => {
    const { isRead, uid, date, value, createdAt } = item.data;
    const [profileDoc] = useDocOnce({
        path: `users/${uid}/profiles/fitbit`,
    });

    const content = `${profileDoc?.data?.user?.displayName ||
        'Anyone'} has reacted to your activity on ${date}`;

    return (
        <Notification
            isRead={isRead}
            icon={<Avatar size="large" src={profileDoc?.data?.user?.avatar} />}
            date={
                <FormattedDate
                    value={createdAt.toDate()}
                    year="numeric"
                    month="short"
                    day="2-digit"
                    hour="numeric"
                    minute="numeric"
                />
            }
            content={content}
            actions={
                <ActionsContainer>
                    <LikeButton value={value} size="small" readOnly showLabel />
                </ActionsContainer>
            }
        />
    );
};

export default function Notifications({ data, navigation }) {
    if (data.length > 0) {
        return (
            <FlatList
                contentContainerStyle={flatListStyles}
                data={data}
                renderItem={({ item }) => (
                    <NotificationItem item={item} navigation={navigation} />
                )}
                keyExtractor={getKeyExtractor}
            />
        );
    }
    return (
        <EmptyMessageContainer>
            <NotificationIcon />
            <MessageTitle>Sorry</MessageTitle>
            <MessageDescription>
                You don't have notifications...
            </MessageDescription>
        </EmptyMessageContainer>
    );
}
