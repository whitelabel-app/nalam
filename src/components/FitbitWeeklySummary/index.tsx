import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { loadFitbitDataForWeek } from '../../redux/actions/dashboard';
import { getCurrentUserUid } from '../../redux/services/auth';
import {
    getFormattedTimeFromMin,
    getFieldValue,
    getFormattedDay,
} from '../../helpers';
import {
    Shoe,
    Fire,
    Heart,
    Distance,
    Excercise,
    BloodPressure,
    BloodSugar,
} from '../Icons';
import WeekSelector from './weekSelector';
import {
    CardItemIcon,
    WeeklyItemCard,
    CardItemIconContainer,
    ChevronRightIcon,
} from './styled';

function getTotal(array, field = 'value') {
    if (Array.isArray(array)) {
        return array.reduce((acc, value) => {
            return acc + Number(getFieldValue(value, field));
        }, 0);
    }
    return 0;
}

function getMean(array, field = 'value') {
    if (Array.isArray(array) && array.length) {
        const sum = getTotal(array, field);
        return sum / array.length;
    }
    return 0;
}

function getStepsAvg(steps) {
    return Math.round(getMean(steps));
}

function getDistanceAvg(distances) {
    return getMean(distances).toFixed(2);
}

function getCaloriesAvg(calories) {
    return Math.round(getMean(calories));
}

function getExcerciseAvg(excercies) {
    const minAvg = Math.round(getMean(excercies));
    return getFormattedTimeFromMin(minAvg);
}

function getSleepAvg(sleep) {
    return Math.floor(getMean(sleep, 'minutesAsleep') / 60);
}

function getHeartRateAvg(heartRate) {
    const array = Array.isArray(heartRate)
        ? heartRate.filter(item => item?.value?.restingHeartRate)
        : heartRate;
    return Math.round(getMean(array, 'value.restingHeartRate'));
}

interface SummaryItem {
    dateTime?: string;
    value?: any;
    dateOfSleep?: string;
    efficiency?: string;
}

interface NormalizedItemSummary {
    day: string;
    value: string;
}

function getNormalizedSummaryData(
    summaryData: Array<SummaryItem>,
    dateTimeField = 'dateTime',
    valuePath = 'value',
): Array<NormalizedItemSummary> {
    return summaryData
        ?.map(summaryItemData => {
            const dateTime = summaryItemData[dateTimeField];
            let value = getFieldValue(summaryItemData, valuePath);
            const dayNumber = new Date(dateTime).getDay();

            return {
                dayNumber,
                day: getFormattedDay(dayNumber),
                value,
            };
        })
        .filter(item => !!(item.value || item.value === 0))
        .sort((itemLeft, itemRight) => {
            const dayLeft = itemLeft.dayNumber || 7;
            const dayRight = itemRight.dayNumber || 7;
            return dayLeft - dayRight;
        });
}

const toHours = (mins?: number) => {
    return Math.floor((mins || 0) / 60) || 0;
};

const scrollViewStyles = {
    paddingBottom: 180,
    paddingTop: 20,
    flexGrow: 1,
};

export default function FitbitWeeklySummary(props) {
    const {
        navigation: { navigate, isFocused },
        uid = getCurrentUserUid(),
        weekDateRange,
        hasPicker = false,
        memberSince,
    } = props;
    const [week, setWeek] = useState(weekDateRange);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFocused()) {
            dispatch(
                loadFitbitDataForWeek({
                    week,
                    uid,
                }),
            );
        }
    }, [dispatch, isFocused, uid, week]);

    const summary = useSelector(state => {
        if (state.dashboard[uid]) {
            return state.dashboard[uid][week];
        }
        return {};
    });
    const stepsAvg = useMemo(() => getStepsAvg(summary?.['activities-steps']), [
        summary,
    ]);
    const distanceAvg = useMemo(
        () => getDistanceAvg(summary?.['activities-distance']),
        [summary],
    );
    const caloriesAvg = useMemo(
        () => getCaloriesAvg(summary?.['activities-calories']),
        [summary],
    );
    const excerciseAvg = useMemo(
        () => getExcerciseAvg(summary?.['activities-minutesVeryActive']),
        [summary],
    );
    const sleepAvg = useMemo(() => getSleepAvg(summary?.sleep), [summary]);
    const heartRateAvg = useMemo(
        () => getHeartRateAvg(summary?.['activities-heart']),
        [summary],
    );

    const sleepData = useMemo(
        () =>
            getNormalizedSummaryData(
                summary?.sleep,
                'dateOfSleep',
                'minutesAsleep',
            )?.map(data => ({
                ...data,
                value: toHours(Number(data?.value)),
            })),
        [summary],
    );

    const heartRateData = useMemo(
        () =>
            getNormalizedSummaryData(
                summary?.['activities-heart'],
                'dateTime',
                'value.restingHeartRate',
            ),
        [summary],
    );

    return (
        <View>
            <RenderIf isTrue={hasPicker}>
                <WeekSelector
                    memberSince={memberSince}
                    week={week}
                    onChange={value => {
                        setWeek(value);
                    }}
                />
            </RenderIf>
            <ScrollView contentContainerStyle={scrollViewStyles}>
                <WeeklyItemCard
                    onPress={() =>
                        navigate('WeeklyCategoryDetails', {
                            data: getNormalizedSummaryData(
                                summary?.['activities-steps'],
                            ),
                            label: 'steps',
                            title: 'Steps',
                            color: '#05B1A4',
                            total: getTotal(summary?.['activities-steps']),
                            avg: stepsAvg,
                        })
                    }
                    label="Steps"
                    description={`AVG: ${stepsAvg}`}
                    action={<ChevronRightIcon />}
                    icon={
                        <CardItemIconContainer>
                            <CardItemIcon as={Shoe} />
                        </CardItemIconContainer>
                    }
                />
                <WeeklyItemCard
                    onPress={() =>
                        navigate('WeeklyCategoryDetails', {
                            data: getNormalizedSummaryData(
                                summary['activities-minutesVeryActive'],
                            ),
                            label: 'min',
                            title: 'Active Time',
                            color: '#F6B31E',
                            total: getFormattedTimeFromMin(
                                Math.round(
                                    getTotal(
                                        summary['activities-minutesVeryActive'],
                                    ),
                                ),
                            ),
                            avg: excerciseAvg,
                        })
                    }
                    label="Active Time"
                    description={`AVG: ${excerciseAvg}`}
                    action={<ChevronRightIcon />}
                    icon={
                        <CardItemIconContainer>
                            <CardItemIcon as={Excercise} />
                        </CardItemIconContainer>
                    }
                />
                <WeeklyItemCard
                    onPress={() =>
                        navigate('WeeklyCategoryDetails', {
                            data: getNormalizedSummaryData(
                                summary['activities-distance'],
                            ),
                            title: 'Distance',
                            label: 'km',
                            color: '#DD0612',
                            total: getTotal(
                                summary['activities-distance'],
                            ).toFixed(2),
                            avg: `${distanceAvg} km`,
                        })
                    }
                    label="Distance"
                    description={`AVG: ${distanceAvg} km`}
                    action={<ChevronRightIcon />}
                    icon={
                        <CardItemIconContainer>
                            <CardItemIcon as={Distance} />
                        </CardItemIconContainer>
                    }
                />
                <WeeklyItemCard
                    onPress={() =>
                        navigate('WeeklyCategoryDetails', {
                            data: getNormalizedSummaryData(
                                summary['activities-calories'],
                            ),
                            label: 'cal',
                            title: 'Calories',
                            color: '#FFCE61',
                            total: getTotal(summary['activities-calories']),
                            avg: `${caloriesAvg} cal`,
                        })
                    }
                    label="Calories"
                    description={`AVG: ${caloriesAvg} cal`}
                    action={<ChevronRightIcon />}
                    icon={
                        <CardItemIconContainer>
                            <CardItemIcon as={Fire} />
                        </CardItemIconContainer>
                    }
                />
                <RenderIf isTrue={!!sleepData?.length}>
                    <WeeklyItemCard
                        onPress={() =>
                            navigate('WeeklyCategoryDetails', {
                                data: sleepData,
                                label: 'hr',
                                title: 'Sleep',
                                color: '#877AFF',
                                avg: `${sleepAvg}hr`,
                            })
                        }
                        label="Sleep"
                        description={`AVG: ${sleepAvg}hr`}
                        action={<ChevronRightIcon />}
                        icon={
                            <CardItemIconContainer>
                                <CardItemIcon />
                            </CardItemIconContainer>
                        }
                    />
                </RenderIf>
                <RenderIf isTrue={!!heartRateData?.length}>
                    <WeeklyItemCard
                        onPress={() =>
                            navigate('WeeklyCategoryDetails', {
                                data: heartRateData,
                                label: 'bpm',
                                title: 'Heart Rate',
                                color: '#FF5555',
                                avg: `${heartRateAvg} bmp`,
                                isLineChartType: true,
                            })
                        }
                        label="Heart Rate"
                        description={`AVG: ${heartRateAvg} bmp`}
                        action={<ChevronRightIcon />}
                        icon={
                            <CardItemIconContainer>
                                <CardItemIcon as={Heart} />
                            </CardItemIconContainer>
                        }
                    />
                </RenderIf>
                <RenderIf isTrue={true}>
                    <WeeklyItemCard
                        onPress={() =>
                            navigate('WeeklyBloodPressureDetails', {
                                week,
                                uid,
                            })
                        }
                        label="Blood Pressure"
                        action={<ChevronRightIcon />}
                        icon={
                            <CardItemIconContainer>
                                <CardItemIcon as={BloodPressure} />
                            </CardItemIconContainer>
                        }
                    />
                </RenderIf>
                <RenderIf isTrue={true}>
                    <WeeklyItemCard
                        onPress={() =>
                            navigate('WeeklyBloodSugarDetails', {
                                week,
                                uid,
                            })
                        }
                        label="Blood Sugar"
                        action={<ChevronRightIcon />}
                        icon={
                            <CardItemIconContainer>
                                <CardItemIcon as={BloodSugar} />
                            </CardItemIconContainer>
                        }
                    />
                </RenderIf>
            </ScrollView>
        </View>
    );
}
