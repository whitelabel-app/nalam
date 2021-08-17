import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker(props) {
    const { value, maximumDate, mode, onChange } = props;
    return (
        <DateTimePicker
            value={value}
            maximumDate={maximumDate}
            mode={mode}
            onChange={(event, date) => onChange(date)}
        />
    );
}
