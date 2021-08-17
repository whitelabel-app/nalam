import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import ActivityPageDetails from '../../../components/ActivityPageDetails';
import {
    TotalLabel,
    TotalContainer,
    ContentHeader,
    ContentHeaderLabel,
    ContentHeaderAvg,
} from './styled';
import useActivities from '../../../redux/services/hooks/useActivities';
import {
    getFormattedDate,
    getWeekRangeLabel,
    getWeekDays,
} from '../../../helpers';
import { Text } from 'react-native';
import StepsList from '../../../components/StepsList/index';

const getTotal = weekSteps => {
    return (
        weekSteps?.reduce((acc, current) => {
            return acc + current.steps;
        }, 0) || 0
    );
};

const getStepsAvg = weekSteps => {
    if (Array.isArray(weekSteps)) {
        return Math.floor(getTotal(weekSteps) / weekSteps.length);
    }
    return 0;
};

export default function StepsDetails({ navigation }) {
    const {
        goBack,
        state: {
            params: { uid, date },
        },
    } = navigation;
    const days = useMemo(() => getWeekDays(date), [date]);
    const data = days.map(day => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const activities = useActivities(uid, getFormattedDate(day));
        const steps = activities?.summary?.steps || 0;
        return {
            dateTime: day,
            steps,
        };
    });

    const total = getTotal(data);
    const avg = getStepsAvg(data);

    return (
        <ActivityPageDetails
            headerColor={'#05B1A4'}
            onBack={() => goBack()}
            topHeaderTitle="Steps"
            topHeaderRightContent={
                <TotalContainer>
                    <TotalLabel>TOTAL</TotalLabel>
                    <TotalLabel>{total}</TotalLabel>
                </TotalContainer>
            }>
            <ContentHeader>
                <ContentHeaderLabel>
                    {getWeekRangeLabel(date)}
                </ContentHeaderLabel>
                <ContentHeaderAvg>
                    <Text>AVG: </Text>
                    <Text>{avg}</Text>
                </ContentHeaderAvg>
            </ContentHeader>
            <ScrollView>
                <StepsList list={data} uid={uid} />
            </ScrollView>
        </ActivityPageDetails>
    );
}
