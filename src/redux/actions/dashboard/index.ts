import { startLoadingApp, stopLoadingApp } from '../app';
import {
    listenFitbitDataFor,
    listenFitbitSummaryFor,
} from '../../services/users';
import {
    resolveFitbitDataFor,
    resolveFitbitSummaryFor,
} from '../../services/fitbit';
import { getFormattedDate } from '../../../helpers';
import { getDoc } from '../../services/firebase';
import isEqualDate from '../../../helpers/isEqualDate';
import isGreaterDateTime from '../../../helpers/isGreaterDateTime';

export const LOAD_DASHBOARD_DATA = 'LOAD_DASHBOARD_DATA';
function loadData({ data, uid, date }) {
    return {
        type: LOAD_DASHBOARD_DATA,
        data,
        uid,
        date,
    };
}

export const LOAD_DASHBOARD_SUMMARY = 'LOAD_DASHBOARD_SUMMARY';
function loadSummary({ data, uid, week }) {
    return {
        type: LOAD_DASHBOARD_SUMMARY,
        data,
        uid,
        week,
    };
}

function fetchDataFromFitbit({ date, uid, setAsCompleted = false }) {
    return async dispatch => {
        try {
            await resolveFitbitDataFor({ day: date, uid, setAsCompleted });
            return dispatch(stopLoadingApp());
        } catch (error) {
            return dispatch(stopLoadingApp());
        }
    };
}

function handleFitbitDataFromDB({ data, date, uid }) {
    return async dispatch => {
        if (data) {
            dispatch(
                loadData({
                    data,
                    uid,
                    date,
                }),
            );
            return dispatch(stopLoadingApp());
        }
        return dispatch(stopLoadingApp());
    };
}

interface Params {
    day: Date;
    uid: string;
    isFirstTime?: boolean;
}

async function isFitbitSyncNecessary(date, uid) {
    const dateDoc = await getDoc({
        path: `users/${uid}/history/${date}`,
    });
    const currentDateData = dateDoc?.data as any;
    if (currentDateData?.isCompleted) {
        return false;
    }

    const userDoc = await getDoc({
        path: `users/${uid}`,
    });
    const userData = userDoc?.data as any;

    const lastSyncFitbit = userData?.lastSyncFitbit?.toDate() || new Date();

    const currentDayIsLessLastSyncDay =
        isGreaterDateTime(lastSyncFitbit, date) &&
        !isEqualDate(lastSyncFitbit, date);
    return currentDayIsLessLastSyncDay;
}

export function loadFitbitDataFor({ day, uid, isFirstTime = false }: Params) {
    return async (dispatch, getState) => {
        const date = getFormattedDate(day);
        const dashboardState = getState().dashboard;
        if (dashboardState[uid] && dashboardState[uid][date]) {
            return null;
        }
        if (isFirstTime) {
            dispatch(
                startLoadingApp({
                    title: 'Initializing App',
                }),
            );
        } else {
            dispatch(startLoadingApp({ transparent: true }));
        }

        const isSyncNecessary = await isFitbitSyncNecessary(date, uid);
        if (isSyncNecessary) {
            dispatch(fetchDataFromFitbit({ date, uid, setAsCompleted: true }));
        }

        return listenFitbitDataFor({
            day: date,
            uid,
            withCallback: data =>
                dispatch(
                    handleFitbitDataFromDB({
                        data,
                        date,
                        uid,
                    }),
                ),
        });
    };
}

function fetchSummaryFromFitbit({ week, uid }) {
    return async dispatch => {
        try {
            await resolveFitbitSummaryFor({ week, uid });
            return dispatch(stopLoadingApp());
        } catch (error) {
            return dispatch(stopLoadingApp());
        }
    };
}

function handleFitbitSummaryFromDB({ payload, week, uid }) {
    return async dispatch => {
        if (payload && payload.data) {
            dispatch(
                loadSummary({
                    data: payload.data,
                    uid,
                    week,
                }),
            );
            return dispatch(stopLoadingApp());
        }
        return dispatch(fetchSummaryFromFitbit({ week, uid }));
    };
}

interface WeekParams {
    week: string;
    uid: string;
}

export function loadFitbitDataForWeek({ week, uid }: WeekParams) {
    return async (dispatch, getState) => {
        const dashboardState = getState().dashboard;
        if (dashboardState[uid] && dashboardState[uid][week]) {
            return null;
        }
        dispatch(startLoadingApp({ transparent: true }));
        return listenFitbitSummaryFor({
            week,
            uid,
            withCallback: payload =>
                dispatch(handleFitbitSummaryFromDB({ payload, week, uid })),
        });
    };
}
