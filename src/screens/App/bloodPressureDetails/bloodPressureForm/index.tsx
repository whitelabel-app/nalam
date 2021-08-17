import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
import DateTimePicker from '../../../../components/DateTimePicker';
import BloodPressurePicker from '../../../../components/BloodPressurePicker';
import HeartRatePicker from '../../../../components/HeartRatePicker';
import {
    Container,
    StyledButton,
    RightText,
    Accordion,
    RightContent,
    Value,
    Label,
    HeartRateLabelText,
} from './styled';
import { ScrollView } from 'react-native-gesture-handler';

const BloodPressureForm = props => {
    const {
        style,
        onSubmit,
        dateTime: dateTimeProp,
        pressure: pressureProp,
        heartRate: heartRateProp,
    } = props;
    const [isDateAccordionOpen, setDateAccordionOpen] = useState(false);
    const handleDateAccordionPress = () => {
        setDateAccordionOpen(!isDateAccordionOpen);
    };

    const today = new Date();
    const [dateTime, setDateTime] = useState<Date | undefined>(dateTimeProp);
    const [pressure, setPressure] = useState(pressureProp);
    const [heartRate, setHeartRate] = useState(heartRateProp);
    const heartRateLabel = heartRate && `${heartRate}bpm`;

    const validateValues = pressure && pressure.sys && pressure.dia;

    return (
        <Container style={style}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}>
                <Accordion
                    label="Date and Time"
                    isExpanded={isDateAccordionOpen}
                    onPress={handleDateAccordionPress}
                    rightContent={
                        <RightText>
                            <FormattedDate
                                value={dateTime}
                                day="2-digit"
                                month="short"
                                hour="numeric"
                                minute="numeric"
                            />
                        </RightText>
                    }>
                    <DateTimePicker
                        isOpen={isDateAccordionOpen}
                        onRequestClose={() => setDateAccordionOpen(false)}
                        value={dateTime || today}
                        maximumDate={today}
                        mode="datetime"
                        onChange={setDateTime}
                    />
                </Accordion>
                <Accordion
                    label="Blood Pressure"
                    rightContent={
                        <RightContent>
                            <Label>Sys:</Label>
                            <Value>{pressure && pressure.sys}</Value>
                            <Label>Dia:</Label>
                            <Value>{pressure && pressure.dia}</Value>
                        </RightContent>
                    }>
                    <BloodPressurePicker
                        value={pressure}
                        onChange={value => setPressure(value)}
                    />
                </Accordion>
                <Accordion
                    label={
                        <HeartRateLabelText>
                            Heart Rate{' '}
                            <HeartRateLabelText variant="grey">
                                (optional)
                            </HeartRateLabelText>
                        </HeartRateLabelText>
                    }
                    rightContent={<RightText>{heartRateLabel}</RightText>}>
                    <HeartRatePicker
                        value={heartRate}
                        onChange={value => setHeartRate(value)}
                    />
                </Accordion>
            </ScrollView>
            <StyledButton
                label="Save"
                variant="brand"
                disabled={!validateValues}
                onPress={() => {
                    if (heartRate) {
                        onSubmit({
                            dateTime,
                            heartRate,
                            ...pressure,
                        });
                    } else {
                        onSubmit({
                            dateTime,
                            ...pressure,
                        });
                    }
                }}
            />
        </Container>
    );
};

BloodPressureForm.propTypes = {
    style: PropTypes.object,
    onSubmit: PropTypes.func,
    dateTime: PropTypes.instanceOf(Date),
    pressure: PropTypes.shape({
        sys: PropTypes.number,
        dia: PropTypes.number,
    }),
    heartRate: PropTypes.number,
};

BloodPressureForm.defaultProps = {
    style: undefined,
    onSubmit: () => {},
    dateTime: new Date(),
    pressure: { sys: 105, dia: 78 },
    heartRate: undefined,
};

export default BloodPressureForm;
