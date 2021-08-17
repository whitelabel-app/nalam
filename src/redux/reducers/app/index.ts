import {
    START_LOADING_APP,
    STOP_LOADING_APP,
    LOAD_USER_PROFILE,
} from '../../actions/app';

const initialState = {
    spinner: {
        isLoadingApp: false,
        transparent: false,
        title: '',
        description: '',
        onStopLoading: () => {},
    },
};

function startLoadingApp(state, { transparent, title, description }) {
    return {
        ...state,
        spinner: {
            isLoadingApp: true,
            transparent,
            title,
            description,
            onStopLoading: () => {},
        },
    };
}

function stopLoadingApp(state, { onStopLoading }) {
    return {
        ...state,
        spinner: {
            isLoadingApp: false,
            transparent: false,
            title: '',
            description: '',
            onStopLoading,
        },
    };
}

function loadUserProfile(state, { profile }) {
    return {
        ...state,
        profile,
    };
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_APP:
            return startLoadingApp(state, action);

        case STOP_LOADING_APP:
            return stopLoadingApp(state, action);

        case LOAD_USER_PROFILE:
            return loadUserProfile(state, action);

        default:
            return state;
    }
}
