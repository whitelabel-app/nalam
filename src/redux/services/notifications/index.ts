import { updateDoc } from '../firebase';
import { getCurrentUserUid } from '../auth';

export function acceptNotification(notification) {
    return updateDoc({
        path: `users/${getCurrentUserUid()}/notifications/${notification.id}`,
        data: {
            status: 'accepted',
        },
    });
}

export function denyNotification(notification) {
    return updateDoc({
        path: `users/${getCurrentUserUid()}/notifications/${notification.id}`,
        data: {
            status: 'denied',
        },
    });
}

export function markNotificationAsRead(notificationId) {
    return updateDoc({
        path: `users/${getCurrentUserUid()}/notifications/${notificationId}`,
        data: {
            isRead: true,
        },
    });
}
