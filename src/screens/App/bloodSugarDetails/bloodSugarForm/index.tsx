import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { FormattedDate } from 'react-intl';
import {
    Container,
    Accordion,
    RightText,
    RightContent,
    Label,
    Value,
    SaveButton,
} from './styled';
import DateTimePicker from '../../../../components/DateTimePicker';
import BloodSugarPicker from '../../../../components/BloodSugarPicker';
import MealTimePicker from '../../../../components/MealTimePicker';
import { getMealTimeLabel } from '../../../../helpers';

const BloodSugarForm = props => {
    const {
        style,
        onSubmit,
        dateTime: dateTimeProp,
        bloodSugar: bloodSugarProp,
        mealTime: mealTimeProp,
    } = props;
    const [isDateAccordionOpen, setDateAccordionOpen] = useState(false);
    const handleDateAccordionPress = () => {
        setDateAccordionOpen(!isDateAccordionOpen);
    };

    const today = new Date();
    const [dateTime, setDateTime] = useState<Date | undefined>(dateTimeProp);
    const [bloodSugar, setBloodSugar] = useState(bloodSugarProp);
    const [mealTime, setMealTime] = useState(mealTimeProp);

    const validateValues = bloodSugar != null;

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
                    label="Blood Suggar"
                    rightContent={
                        <RightContent>
                            <Value>{bloodSugar}</Value>
                            <Label>mg/dL</Label>
                        </RightContent>
                    }>
                    <BloodSugarPicker
                        value={bloodSugar}
                        onChange={value => setBloodSugar(value)}
                    />
                </Accordion>
                <Accordion
                    label="Meal Time"
                    rightContent={<Label>{getMealTimeLabel(mealTime)}</Label>}>
                    <MealTimePicker
                        value={mealTime}
                        onChange={value => setMealTime(value)}
                    />
                </Accordion>
            </ScrollView>
            <SaveButton
                label="Save"
                variant="brand"
                disabled={!validateValues}
                onPress={() => {
                    onSubmit({
                        dateTime,
                        bloodSugar,
                        mealTime,
                    });
                }}
            />
        </Container>
    );
};

BloodSugarForm.propTypes = {
    style: PropTypes.object,
    onSubmit: PropTypes.func,
    dateTime: PropTypes.instanceOf(Date),
    bloodSugar: PropTypes.number,
    mealTime: PropTypes.oneOf(['unspecified', 'before', 'after']),
};

BloodSugarForm.defaultProps = {
    style: undefined,
    onSubmit: () => {},
    dateTime: new Date(),
    bloodSugar: 120,
    mealTime: 'unspecified',
};

export default BloodSugarForm;
