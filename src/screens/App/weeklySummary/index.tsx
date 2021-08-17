import React from 'react';
import FitbitWeeklySummary from '../../../components/FitbitWeeklySummary';
import {
    Container,
    Header,
    BackButton,
    Title,
    LeftContent,
    HeaderIcon,
    Date,
} from './styled';

export default function WeeklySummary({ navigation }) {
    const {
        goBack,
        state: {
            params: { weekDateRange, formattedWeek },
        },
    } = navigation;

    return (
        <Container>
            <Header>
                <LeftContent>
                    <BackButton
                        icon={<HeaderIcon />}
                        onPress={() => goBack()}
                    />
                    <Title numberOfLines={1}>Weekly Summary</Title>
                </LeftContent>
                <Date>{formattedWeek}</Date>
            </Header>
            <FitbitWeeklySummary
                navigation={navigation}
                weekDateRange={weekDateRange}
            />
        </Container>
    );
}
