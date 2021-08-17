import React, { useMemo, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import NativeModal from 'react-native-modal';
import { getWeekRangeLabel, getWeekDays } from '../../../helpers';
import ActivityPageDetails from '../../../components/ActivityPageDetails';
import ActiveTimeList from '../../../components/ActiveTimeList';
import SummaryBarChart from '../../../components/SummaryBarChart';
import FormattedMinutes from '../../../components/FormattedMinutes';
import { COLOR_WARNING } from '../../../styles/colors';
import {
    TotalContainer,
    TotalLabel,
    ContentHeader,
    ContentHeaderLabel,
    ContentHeaderAvg,
} from './styled';
import Details from './details';
import useHeartRate from '../../../redux/services/hooks/useHeartRate';

const getTotal = activeTimes => {
    return (
        activeTimes?.reduce((acc, current) => {
            return acc + (current.activeTime || 0);
        }, 0) || 0
    );
};

const getActiveTimeAvg = activeTimes => {
    if (Array.isArray(activeTimes)) {
        return Math.floor(getTotal(activeTimes) / activeTimes.length);
    }
    return 0;
};

export default function ActiveTimeDetails({ navigation }) {
    const {
        goBack,
        state: {
            params: { uid, date },
        },
    } = navigation;
    const days = useMemo(() => getWeekDays(date), [date]);

    const data = days.map(day => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const heartRateInfo = useHeartRate(uid, day);
        return {
            dateTime: day,
            activeTime: heartRateInfo?.activeTime,
        };
    });

    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [selectedDate, setSelectedDate] = useState<any>();

    const activeTimeAvg = useMemo(() => getActiveTimeAvg(data), [data]);
    const activeTimeTotalMinutes = useMemo(() => getTotal(data), [data]);

    return (
        <ActivityPageDetails
            headerColor={COLOR_WARNING}
            onBack={() => goBack()}
            topHeaderTitle="Active Time"
            topHeaderRightContent={
                <TotalContainer>
                    <TotalLabel>TOTAL</TotalLabel>
                    <TotalLabel>
                        <FormattedMinutes minutes={activeTimeTotalMinutes} />
                    </TotalLabel>
                </TotalContainer>
            }
            headerBody={
                <SummaryBarChart
                    data={data.map(item => item?.activeTime || 0) as number[]}
                />
            }>
            <ScrollView>
                <ContentHeader>
                    <ContentHeaderLabel>
                        {getWeekRangeLabel(date)}
                    </ContentHeaderLabel>
                    <ContentHeaderAvg>
                        <Text>AVG: </Text>
                        <FormattedMinutes minutes={activeTimeAvg} />
                    </ContentHeaderAvg>
                </ContentHeader>
                <ActiveTimeList
                    uid={uid}
                    list={days}
                    onSelect={selectedDateTime => {
                        setSelectedDate(selectedDateTime);
                        setIsOpenDetail(true);
                    }}
                />
            </ScrollView>
            <NativeModal
                isVisible={isOpenDetail}
                // TODO: remove inline styles
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
                swipeDirection="down"
                onBackdropPress={() => {
                    setIsOpenDetail(false);
                }}
                onSwipeComplete={() => {
                    setIsOpenDetail(false);
                }}>
                <Details uid={uid} selectedDate={selectedDate} />
            </NativeModal>
        </ActivityPageDetails>
    );
}
