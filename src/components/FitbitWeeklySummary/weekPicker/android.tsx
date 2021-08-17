import React, { useMemo } from 'react';
import { Picker, View } from 'react-native';
import { getWeeks, getFormattedWeekYear } from '../../../helpers';

export default function WeekPicker(props) {
    const { onChange, selectedWeek, memberSince } = props;
    const weeks = useMemo(() => getWeeks(memberSince), [memberSince]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                height: 36,
                justifyContent: 'center',
            }}>
            <Picker
                // TODO: remove inline styles
                style={{
                    width: '70%',
                }}
                mode="dialog"
                selectedValue={selectedWeek}
                onValueChange={onChange}>
                {weeks.map(item => {
                    const datesArray = item.split('_');
                    const label = getFormattedWeekYear(
                        datesArray[0],
                        datesArray[1],
                    );
                    return (
                        <Picker.Item key={item} label={label} value={item} />
                    );
                })}
            </Picker>
        </View>
    );
}
