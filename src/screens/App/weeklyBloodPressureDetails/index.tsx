import React from 'react';
import { ScrollView } from 'react-native';
import getWeekDays from '../../../helpers/getWeekDays';
import useBloodPressure from '../../../redux/services/hooks/useBloodPressure';
import {
    Container,
    TopBar,
    BackButton,
    Title,
    TopBarIcon,
    TotalContainer,
    TitleContainer,
    SectionHeader,
    LabelHeader,
    SectionContainer,
} from './styled';
import { getRelativeDateLabel } from '../../../helpers';
import { useIntl } from 'react-intl';
import BloodPressureList from '../../../components/BloodPressureList';

const BloodPressureSection = ({ uid, day }) => {
    const bloodPressures = useBloodPressure(uid, day);
    const intl = useIntl();
    if (bloodPressures?.length) {
        return (
            <SectionContainer>
                <SectionHeader>
                    <LabelHeader>{getRelativeDateLabel(day, intl)}</LabelHeader>
                </SectionHeader>
                <BloodPressureList list={bloodPressures} />
            </SectionContainer>
        );
    } else {
        return null;
    }
};

export default function WeeklyBloodPressureDetails({ navigation }) {
    const {
        goBack,
        state: {
            params: { week, uid },
        },
    } = navigation;

    const weekDays = getWeekDays(week.split('_')?.[0]);

    return (
        <Container>
            <TopBar>
                <TitleContainer>
                    <BackButton
                        icon={<TopBarIcon />}
                        onPress={() => goBack()}
                    />
                    <Title isCenter={true} numberOfLines={1}>
                        {'Blood Pressure'}
                    </Title>
                    <TotalContainer />
                </TitleContainer>
            </TopBar>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 20,
                    paddingTop: 2,
                    flexGrow: 1,
                    alignItems: 'center',
                }}>
                {weekDays.map((day, index) => {
                    const key = `blood_pressure_section_${index}`;
                    return (
                        <BloodPressureSection key={key} uid={uid} day={day} />
                    );
                })}
            </ScrollView>
        </Container>
    );
}
