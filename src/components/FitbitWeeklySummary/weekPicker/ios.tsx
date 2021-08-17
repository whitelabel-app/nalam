import React, { useState, useMemo } from 'react';
import { View, Picker } from 'react-native';
import NativeModal from 'react-native-modal';
import { Button } from 'react-native-rainbow';
import { getWeeks, getFormattedWeekYear } from '../../../helpers';
import getPickerLabel from './getPickerLabel';
import { DateButtonSelector, DateButtonIcon } from '../styled';

export default function WeekPicker(props) {
    const { onChange, selectedWeek, memberSince, isLastWeek } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [week, setWeek] = useState(selectedWeek);
    const weeks = useMemo(() => getWeeks(memberSince), [memberSince]);

    return (
        <View>
            <DateButtonSelector
                label={getPickerLabel(week, isLastWeek)}
                icon={<DateButtonIcon />}
                iconPosition="right"
                onPress={() => setIsOpen(true)}
            />
            <NativeModal
                isVisible={isOpen}
                // TODO: remove inline styles
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
                onBackdropPress={() => setIsOpen(false)}
                onSwipeComplete={() => setIsOpen(false)}
                swipeDirection="down">
                <View>
                    <Picker
                        // TODO: remove inline styles
                        style={{
                            backgroundColor: 'white',
                            paddingVertical: 40,
                            paddingHorizontal: 20,
                            justifyContent: 'space-between',
                            borderRadius: 30,
                            height: 400,
                        }}
                        mode="dropdown"
                        selectedValue={week}
                        onValueChange={value => setWeek(value)}>
                        {weeks.map(item => {
                            const datesArray = item.split('_');
                            const label = getFormattedWeekYear(
                                datesArray[0],
                                datesArray[1],
                            );
                            return (
                                <Picker.Item
                                    key={item}
                                    label={label}
                                    value={item}
                                />
                            );
                        })}
                    </Picker>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Button
                            style={{
                                position: 'absolute',
                                bottom: 40,
                                width: '90%',
                            }}
                            label="Save"
                            variant="brand"
                            onPress={() => {
                                onChange(week);
                                setIsOpen(false);
                            }}
                        />
                    </View>
                </View>
            </NativeModal>
        </View>
    );
}
