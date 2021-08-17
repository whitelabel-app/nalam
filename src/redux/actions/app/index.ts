import { ReactNode } from 'react';

export const START_LOADING_APP = 'START_LOADING_APP';
export const STOP_LOADING_APP = 'STOP_LOADING_APP';

interface StartLoading {
    transparent?: boolean;
    title?: ReactNode;
    description?: ReactNode;
}

export function startLoadingApp(params: StartLoading = {}) {
    const { transparent, title, description } = params;
    return {
        type: START_LOADING_APP,
        transparent,
        title,
        description,
    };
}

interface StopLoading {
    onStopLoading?: () => void;
}

export function stopLoadingApp(params: StopLoading = {}) {
    const { onStopLoading } = params;
    return {
        type: STOP_LOADING_APP,
        onStopLoading,
    };
}

export const LOAD_USER_PROFILE = 'LOAD_USER_PROFILE';

export function loadUserProfile(profile) {
    return {
        type: LOAD_USER_PROFILE,
        profile,
    };
}
