import {
    LOAD_DASHBOARD_DATA,
    LOAD_DASHBOARD_SUMMARY,
} from '../../actions/dashboard';

const initialState = {};

function loadData(state, { data: payload, uid, date }) {
    const uidState = state[uid] || {};
    return {
        ...state,
        [uid]: {
            ...uidState,
            [date]: {
                ...uidState[date],
                [payload.id]: payload.data,
            },
        },
    };
}

function loadSummary(state, { data, uid, week }) {
    const uidState = state[uid] || {};
    return {
        ...state,
        [uid]: {
            ...uidState,
            [week]: data,
        },
    };
}

export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_DASHBOARD_DATA:
            return loadData(state, action);

        case LOAD_DASHBOARD_SUMMARY:
            return loadSummary(state, action);

        default:
            return state;
    }
}
