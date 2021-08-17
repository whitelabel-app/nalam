import React from 'react';
import { ScrollView } from 'react-native';
import getWeekDays from '../../../helpers/getWeekDays';
import useBloodSugar from '../../../redux/services/hooks/useBloodSugar';
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
import BloodSugarList from '../../../components/BloodSugarList';

const BloodSugarSection = ({ uid, day }) => {
    const bloodSugars = useBloodSugar(uid, day);
    const intl = useIntl();
    if (bloodSugars?.length) {
        return (
            <SectionContainer>
                <SectionHeader>
                    <LabelHeader>{getRelativeDateLabel(day, intl)}</LabelHeader>
                </SectionHeader>
                <BloodSugarList list={bloodSugars} />
            </SectionContainer>
        );
    } else {
        return null;
    }
};

export default function WeeklyBloodSugarDetails({ navigation }) {
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
                        {'Blood Sugar'}
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
                    const key = `blood_sugar_section_${index}`;
                    return <BloodSugarSection key={key} uid={uid} day={day} />;
                })}
            </ScrollView>
        </Container>
    );
}
