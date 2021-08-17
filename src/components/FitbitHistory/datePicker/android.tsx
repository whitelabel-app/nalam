import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker(props) {
    const { isOpen, onChange, value, onRequestClose } = props;

    if (isOpen) {
        return (
            <DateTimePicker
                value={value}
                maximumDate={new Date()}
                // TODO: set minimumDate prop
                mode="date"
                display="default"
                onChange={(event, newDate) => {
                    onRequestClose();
                    if (event.type === 'set') {
                        onChange(newDate);
                    }
                }}
            />
        );
    }
    return null;
}
