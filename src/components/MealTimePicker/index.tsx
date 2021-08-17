import React from 'react';
import { Picker } from 'react-native';

export default function MealTimePicker(props) {
    const { onChange, value } = props;

    return (
        <Picker selectedValue={value} onValueChange={onChange}>
            <Picker.Item label="Unspecified" value="unspecified" />
            <Picker.Item label="Before Meal" value="before" />
            <Picker.Item label="After Meal" value="after" />
        </Picker>
    );
}
