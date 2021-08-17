import React, { useState } from 'react';
import {
    Container,
    StyledButton,
    RightText,
    Accordion,
    RightContent,
    Value,
    Label,
} from './styled';
import { ScrollView } from 'react-native-gesture-handler';
import { FormattedDate } from 'react-intl';
import WeightPicker from '../../../../components/WeightPicker';
import DateTimePicker from '../../../../components/DateTimePicker';

const WeightForm = props => {
    const {
        style,
        dateTime: dateTimeProp,
        weight,
        onSubmit,
        editMode = false,
    } = props;
    const [isDateAccordionOpen, setDateAccordionOpen] = useState(false);
    const handleDateAccordionPress = () => {
        setDateAccordionOpen(!isDateAccordionOpen);
    };

    const today = new Date();
    const [dateTime, setDateTime] = useState<Date | undefined>(
        dateTimeProp || new Date(),
    );
    const [weightVaule, setWeightValue] = useState<number>(weight || 120);
    return (
        <Container style={style}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}>
                <Accordion
                    label="Date and Time"
                    readOnly={editMode}
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
                    label="Weight (lbs)"
                    rightContent={
                        <RightContent>
                            <Value>{weightVaule}</Value>
                            <Label>lbs</Label>
                        </RightContent>
                    }>
                    <WeightPicker
                        value={weightVaule}
                        onChange={newValue => setWeightValue(newValue)}
                    />
                </Accordion>
            </ScrollView>
            <StyledButton
                label="Save"
                variant="brand"
                onPress={() => {
                    if (weightVaule) {
                        onSubmit({
                            dateTime,
                            value: weightVaule,
                        });
                    }
                }}
            />
        </Container>
    );
};

export default WeightForm;
