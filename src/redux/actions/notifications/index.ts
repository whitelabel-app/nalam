import {
    acceptNotification,
    denyNotification,
    markNotificationAsRead,
} from '../../services/notifications';

export function confirmInvitationToGroup(notification) {
    return acceptNotification(notification);
}

export function denyInvitationToGroup(notification) {
    return denyNotification(notification);
}

export const LOAD_NOTIFICATIONS = 'LOAD_NOTIFICATIONS';

export function loadNotifications(notifications) {
    return {
        type: LOAD_NOTIFICATIONS,
        notifications,
    };
}

export function markUnreadNotificationsAsRead(unread) {
    return unread.forEach(notification => {
        markNotificationAsRead(notification.id);
    });
}
