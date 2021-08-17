import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { Text } from 'react-native';
import { ProgressCircular } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import ActivityScore from '../ActivityScore';
import ActiveTimeProgressZones from '../ActiveTimeProgressZones';
import FormattedMinutes from '../FormattedMinutes';
import { useCollection } from 'rainbow-firebase-hooks';
import DatePicker from './datePicker';
import {
    Shoe,
    Fire,
    Heart,
    Distance,
    Excercise,
    ChevronRight,
    BloodPressure,
    BloodSugar,
    Moon,
    Vascula,
} from '../Icons';
import { loadFitbitDataFor } from '../../redux/actions/dashboard';
import useStepsLevel from '../../redux/services/hooks/useStepsLevel';
import useStepsProgressScore from '../../redux/services/hooks/useStepsProgressScore';
import useSleepLevel from '../../redux/services/hooks/useSleepLevel';
import useSleepProgressScore from '../../redux/services/hooks/useSleepProgressScore';
import useActiveTimeLevel from '../../redux/services/hooks/useActiveTimeLevel';
import useActiveTimeProgressScore from '../../redux/services/hooks/useActiveTimeProgressScore';
import { getCurrentUserUid } from '../../redux/services/auth';
import { COLOR_BRAND } from '../../styles/colors';
import {
    getFormattedDate,
    getRelativeDateLabel,
    getPercent,
} from '../../helpers';
import ScoreSectionHeader from './scoreSectionHeader';
import {
    Container,
    ChevronFilterButtonIcon,
    Content,
    DateFilterContainer,
    DateButtonSelector,
    DateButtonIcon,
    CardDailyItem,
    CardDailyItemIconContainer,
    CardDailyItemIcon,
    Row,
    ButtonIconFilter,
    ScoreCard,
    ScoreActivityIcon,
    SectionContainer,
    Activities,
    OneItem,
    ScoreHealthContainer,
    TotalContainer,
    ActiveZonesContainer,
} from './styled';
import useHeartRate from '../../redux/services/hooks/useHeartRate';
import useWeight from '../../redux/services/hooks/useWeight';
import useSleepHours from '../../redux/services/hooks/useSleepHours';

function getSleepDescription(sleepHours) {
    return sleepHours ? `${sleepHours} hr` : '';
}

function getDistanceValue(distances) {
    const distance = distances?.find(item => item.activity === 'total')
        .distance;
    return isNaN(distance) ? 0 : distance;
}

function getDistanceDescription(distances) {
    return `${getDistanceValue(distances)} Km`;
}

function getHeartRateDescription(heartRate) {
    if (
        heartRate &&
        heartRate['activities-heart'] &&
        heartRate['activities-heart'][0]?.value?.restingHeartRate
    ) {
        return `${heartRate['activities-heart'][0]?.value?.restingHeartRate} bpm`;
    }
    return '';
}

function getDateSelectorLabel(date, intlProvider) {
    return (
        <Text
            // TODO: remove styles inline
            style={{
                color: COLOR_BRAND,
                textAlign: 'center',
                textTransform: 'uppercase',
            }}>
            {getRelativeDateLabel(date, intlProvider)}
        </Text>
    );
}

const activitiesGoals = {
    distance: 8.5,
    cals: 2854,
};

const getWeightLabel = weight => {
    if (weight) {
        return `${weight} lbs`;
    }
    return '';
};

export default function FitbitHistory(props) {
    const {
        navigation,
        uid,
        showDistance,
        showHeartRate,
        showCalories,
        isFirstTime = false,
    } = props;
    const [isDatePickerOpen, setDatePickerOpen] = useState(false);
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const [date, setSelectedDate] = useState(today);
    const isNextDateButtonDisabled = date.getTime() === today.getTime();
    const dispatch = useDispatch();
    const intl = useIntl();
    const formattedDate = getFormattedDate(date);
    const isCurrentLoggedUser = uid === getCurrentUserUid();

    useEffect(() => {
        if (navigation.isFocused()) {
            dispatch(
                loadFitbitDataFor({
                    day: date,
                    uid,
                    isFirstTime,
                }),
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isFirstTime, navigation, uid]);
    const heartRateInfo = useHeartRate(uid, date);

    const [bloodPressure] = useCollection({
        path: `users/${uid}/history/${formattedDate}/bloodPressure`,
        query: ref =>
            ref
                .where('enabled', '==', true)
                .orderBy('dateTime', 'desc')
                .limit(1),
    });
    const lastBloodPressure = (bloodPressure[0] as any)?.data;
    const bloodPressureValue = lastBloodPressure
        ? `${lastBloodPressure.sys}/${lastBloodPressure.dia}`
        : 'Enter data';

    const [bloodSugar] = useCollection({
        path: `users/${uid}/history/${formattedDate}/bloodSugar`,
        query: ref =>
            ref
                .where('enabled', '==', true)
                .orderBy('dateTime', 'desc')
                .limit(1),
    });
    const lastBloodSugar = (bloodSugar[0] as any)?.data;
    const bloodSugarLastValue = lastBloodSugar
        ? `${lastBloodSugar.bloodSugar} mg/dL`
        : 'Enter data';

    const [weight] = useWeight(uid, date);

    const showPrevDate = () => {
        const prevDate = new Date(date.setDate(date.getDate() - 1));
        dispatch(loadFitbitDataFor({ day: prevDate, uid }));
        setSelectedDate(prevDate);
    };

    const showNextDate = () => {
        const nextDate = new Date(date.setDate(date.getDate() + 1));
        dispatch(loadFitbitDataFor({ day: nextDate, uid }));
        setSelectedDate(nextDate);
    };

    const dashboard = useSelector(state => {
        if (state.dashboard[uid]) {
            return state.dashboard[uid][formattedDate];
        }
        return {};
    });
    const summary = dashboard?.activities?.summary;
    const stepsLevel = useStepsLevel(uid, formattedDate);
    const stepsProgressScore = useStepsProgressScore(uid, formattedDate);

    const sleepLevel = useSleepLevel(uid, formattedDate);
    const sleepProgressScore = useSleepProgressScore(uid, formattedDate);
    const sleepHours = useSleepHours(uid, formattedDate);
    const activeTimeLevel = useActiveTimeLevel(uid, formattedDate);
    const activeTimeProgressScore = useActiveTimeProgressScore(
        uid,
        formattedDate,
    );

    return (
        <Container>
            <DateFilterContainer>
                <ButtonIconFilter
                    variant="neutral"
                    size="x-small"
                    icon={<ChevronFilterButtonIcon />}
                    onPress={showPrevDate}
                />
                <DateButtonSelector
                    label={getDateSelectorLabel(date, intl)}
                    icon={<DateButtonIcon />}
                    iconPosition="right"
                    onPress={() => setDatePickerOpen(true)}
                />
                <ButtonIconFilter
                    variant="neutral"
                    size="x-small"
                    icon={
                        <ChevronFilterButtonIcon
                            disabled={isNextDateButtonDisabled}
                            as={ChevronRight}
                        />
                    }
                    disabled={isNextDateButtonDisabled}
                    onPress={showNextDate}
                />
            </DateFilterContainer>
            <Content
                contentContainerStyle={{
                    alignItems: 'center',
                    flexGrow: 1,
                }}>
                <SectionContainer
                    label={
                        <ScoreSectionHeader
                            isCurrentLoggedUser={isCurrentLoggedUser}
                            uid={uid}
                            formattedDate={formattedDate}
                        />
                    }>
                    <ScoreHealthContainer>
                        <ActivityScore
                            label={stepsLevel}
                            value={stepsProgressScore}
                            icon={<ScoreActivityIcon as={Shoe} />}
                            variant="success"
                            size="large"
                            moodSize="medium"
                        />
                        <ActivityScore
                            label={sleepLevel}
                            value={sleepProgressScore}
                            icon={<ScoreActivityIcon as={Moon} />}
                            size="large"
                            moodSize="medium"
                        />
                        <ActivityScore
                            label={activeTimeLevel}
                            value={activeTimeProgressScore}
                            icon={<ScoreActivityIcon as={Excercise} />}
                            variant="warning"
                            size="large"
                            moodSize="medium"
                        />
                    </ScoreHealthContainer>
                </SectionContainer>

                <SectionContainer label="Active Time">
                    <ScoreCard>
                        <TotalContainer>
                            <FormattedMinutes
                                minutes={heartRateInfo?.activeTime}
                                size="large"
                            />
                        </TotalContainer>
                        <ActiveZonesContainer>
                            <ActiveTimeProgressZones
                                label="Moderate"
                                minutes={
                                    heartRateInfo?.zones?.moderate?.minutes
                                }
                                variant="warning"
                            />
                            <ActiveTimeProgressZones
                                label="Vigorous"
                                minutes={
                                    heartRateInfo?.zones?.vigorous?.minutes
                                }
                            />
                            <ActiveTimeProgressZones
                                label="Peak"
                                minutes={heartRateInfo?.zones?.peak?.minutes}
                                variant="error"
                            />
                        </ActiveZonesContainer>
                    </ScoreCard>
                </SectionContainer>

                <SectionContainer label="Activities">
                    <Activities>
                        <Row>
                            <CardDailyItem
                                label="Steps"
                                value={summary?.steps}
                                onPress={() =>
                                    navigation.navigate('StepsDetails', {
                                        uid,
                                        date,
                                    })
                                }
                                icon={
                                    <ProgressCircular
                                        size="large"
                                        variant="success"
                                        value={stepsProgressScore}
                                        icon={<CardDailyItemIcon as={Shoe} />}
                                    />
                                }
                            />
                            <CardDailyItem
                                label="Active Time"
                                onPress={() =>
                                    navigation.navigate('ActiveTimeDetails', {
                                        uid,
                                        date,
                                    })
                                }
                                value={
                                    <FormattedMinutes
                                        minutes={heartRateInfo?.activeTime}
                                        size="medium"
                                    />
                                }
                                icon={
                                    <ProgressCircular
                                        size="large"
                                        variant="warning"
                                        value={activeTimeProgressScore}
                                        icon={
                                            <CardDailyItemIcon as={Excercise} />
                                        }
                                    />
                                }
                            />
                        </Row>
                        <Row>
                            <CardDailyItem
                                label="Sleep"
                                value={getSleepDescription(sleepHours)}
                                icon={
                                    <ProgressCircular
                                        size="large"
                                        value={sleepProgressScore}
                                        icon={<CardDailyItemIcon />}
                                    />
                                }
                            />
                            <CardDailyItem
                                label="Weight"
                                value={getWeightLabel(weight?.value)}
                                onPress={() =>
                                    navigation.navigate('WeightDetails', {
                                        uid,
                                        date,
                                    })
                                }
                                icon={
                                    <CardDailyItemIconContainer>
                                        <CardDailyItemIcon as={Vascula} />
                                    </CardDailyItemIconContainer>
                                }
                            />
                        </Row>
                        <Row>
                            <CardDailyItem
                                onPress={() =>
                                    navigation.navigate(
                                        'BloodPressureDetails',
                                        {
                                            uid,
                                            date,
                                        },
                                    )
                                }
                                label="Blood Pressure"
                                value={bloodPressureValue}
                                icon={
                                    <CardDailyItemIconContainer>
                                        <CardDailyItemIcon as={BloodPressure} />
                                    </CardDailyItemIconContainer>
                                }
                            />
                            <CardDailyItem
                                onPress={() =>
                                    navigation.navigate('BloodSugarDetails', {
                                        uid,
                                        date,
                                    })
                                }
                                label="Blood Sugar"
                                value={bloodSugarLastValue}
                                icon={
                                    <CardDailyItemIconContainer>
                                        <CardDailyItemIcon as={BloodSugar} />
                                    </CardDailyItemIconContainer>
                                }
                            />
                        </Row>
                        <Row>
                            <RenderIf isTrue={showDistance}>
                                <CardDailyItem
                                    label="Distance"
                                    value={getDistanceDescription(
                                        summary?.distances,
                                    )}
                                    icon={
                                        <ProgressCircular
                                            size="large"
                                            variant="error"
                                            value={getPercent(
                                                activitiesGoals.distance,
                                                getDistanceValue(
                                                    summary?.distances,
                                                ),
                                            )}
                                            icon={
                                                <CardDailyItemIcon
                                                    as={Distance}
                                                />
                                            }
                                        />
                                    }
                                />
                            </RenderIf>

                            <RenderIf isTrue={showCalories}>
                                <CardDailyItem
                                    label="Cals"
                                    value={summary?.caloriesOut}
                                    icon={
                                        <ProgressCircular
                                            size="large"
                                            variant="warning"
                                            value={getPercent(
                                                activitiesGoals.cals,
                                                summary?.caloriesOut,
                                            )}
                                            icon={
                                                <CardDailyItemIcon as={Fire} />
                                            }
                                        />
                                    }
                                />
                            </RenderIf>
                        </Row>
                        <Row>
                            <RenderIf isTrue={showHeartRate}>
                                <OneItem>
                                    <CardDailyItem
                                        label="Heart Rate"
                                        value={getHeartRateDescription(
                                            dashboard?.heartRate,
                                        )}
                                        icon={
                                            <CardDailyItemIconContainer>
                                                <CardDailyItemIcon as={Heart} />
                                            </CardDailyItemIconContainer>
                                        }
                                    />
                                </OneItem>
                            </RenderIf>
                        </Row>
                    </Activities>
                </SectionContainer>
            </Content>
            <DatePicker
                isOpen={isDatePickerOpen}
                onRequestClose={() => setDatePickerOpen(false)}
                onChange={newDate => {
                    if (newDate) {
                        setSelectedDate(newDate);
                        dispatch(loadFitbitDataFor({ day: newDate, uid }));
                    }
                }}
                value={date}
            />
        </Container>
    );
}
