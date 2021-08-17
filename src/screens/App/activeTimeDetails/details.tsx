import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import FormattedMinutes from '../../../components/FormattedMinutes';
import ActiveTimeProgressZones from '../../../components/ActiveTimeProgressZones';
import {
    Container,
    Top,
    Left,
    Right,
    Row,
    ExerciseZonesContainer,
    DateContainer,
    MoodOutputDetails,
    HeaderContainer,
    HeaderLabel,
    HeaderIcon,
    ActiveTimeProgressZonesTotal,
    Content,
} from './styled';
import { Excercise } from '../../../components/Icons';
import { getFormattedDate, getRelativeDateLabel } from '../../../helpers';
import useActiveTimeLevel from '../../../redux/services/hooks/useActiveTimeLevel';
import useHeartRate from '../../../redux/services/hooks/useHeartRate';

const Details = props => {
    const { style, selectedDate: dateTime, uid } = props;
    const intl = useIntl();
    const activeTimeLevel = useActiveTimeLevel(uid, getFormattedDate(dateTime));
    const heartRateInfo = useHeartRate(uid, dateTime);

    return (
        <Container style={style}>
            <Top>
                <Left>
                    <HeaderContainer>
                        <HeaderIcon as={Excercise} />
                        <HeaderLabel>Active Time</HeaderLabel>
                    </HeaderContainer>
                    <Content>
                        <FormattedMinutes
                            size="medium"
                            minutes={heartRateInfo?.activeTime}
                        />
                        <MoodOutputDetails
                            size="medium"
                            label={activeTimeLevel}
                        />
                    </Content>
                </Left>
                <Right>
                    <DateContainer>
                        {getRelativeDateLabel(dateTime, intl)}
                    </DateContainer>
                </Right>
            </Top>
            <ExerciseZonesContainer>
                <HeaderContainer>
                    <HeaderIcon />
                    <HeaderLabel>Exercise Zones</HeaderLabel>
                </HeaderContainer>
                <Content>
                    <ActiveTimeProgressZonesTotal
                        label="Total"
                        minutes={heartRateInfo?.totalTime}
                        variant="default"
                    />
                    <Row>
                        <ActiveTimeProgressZones
                            label="Moderate"
                            minutes={heartRateInfo?.zones?.moderate?.minutes}
                            variant="warning"
                        />
                        <ActiveTimeProgressZones
                            label="Vigorous"
                            minutes={heartRateInfo?.zones?.vigorous?.minutes}
                        />
                        <ActiveTimeProgressZones
                            label="Peak"
                            minutes={heartRateInfo?.zones?.peak?.minutes}
                            variant="error"
                        />
                    </Row>
                </Content>
            </ExerciseZonesContainer>
        </Container>
    );
};

Details.propTypes = {
    style: PropTypes.object,
    selectedDate: PropTypes.object,
    uid: PropTypes.string,
};

Details.defaultProps = {
    style: undefined,
    selectedDate: undefined,
    uid: undefined,
};

export default Details;
