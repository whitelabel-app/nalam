import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

type Mode = 'date' | 'time';

export default function DatePicker(props) {
    const { isOpen, onChange, value, maximumDate, onRequestClose } = props;
    const [date, setDate] = useState(value);
    const [mode, setMode] = useState<Mode>('date');

    if (isOpen) {
        return (
            <DateTimePicker
                value={value}
                maximumDate={maximumDate}
                mode={mode}
                onChange={(event, newDate) => {
                    if (event.type === 'dismissed') {
                        onRequestClose();
                    }
                    if (event.type === 'set') {
                        if (mode === 'date') {
                            setDate(newDate);
                            setMode('time');
                        }
                        if (mode === 'time') {
                            onChange(
                                new Date(
                                    date.getFullYear(),
                                    date.getMonth(),
                                    date.getDate(),
                                    newDate?.getHours(),
                                    newDate?.getMinutes(),
                                    newDate?.getSeconds(),
                                ),
                            );
                            onRequestClose();
                        }
                    }
                }}
            />
        );
    }
    return null;
}
