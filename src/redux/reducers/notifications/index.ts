import { LOAD_NOTIFICATIONS } from '../../actions/notifications';

const initialState = {
    all: [],
    unread: [],
};

function loadNotifications(state, { notifications }) {
    return {
        all: notifications,
        unread: notifications.filter(notification => !notification.data.isRead),
    };
}

export default function notificationsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_NOTIFICATIONS:
            return loadNotifications(state, action);

        default:
            return state;
    }
}
