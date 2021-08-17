import React, { useState } from 'react';
import { View } from 'react-native';
import NativeModal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-rainbow';

export default function DatePicker(props) {
    const { isOpen, onChange, value, onRequestClose } = props;
    const [dateToSelect, setDateToSelect] = useState(value);
    const [newDate, setNewDate] = useState(null);

    return (
        <NativeModal
            isVisible={isOpen}
            // TODO: remove inline styles
            style={{
                justifyContent: 'flex-end',
                margin: 0,
            }}
            onModalHide={() => {
                onChange(newDate);
                setNewDate(null);
            }}
            onBackdropPress={onRequestClose}
            onSwipeComplete={onRequestClose}
            swipeDirection="down">
            <View
                // TODO: remove inline styles
                style={{
                    backgroundColor: 'white',
                    paddingVertical: 40,
                    paddingHorizontal: 20,
                    justifyContent: 'space-between',
                    borderRadius: 30,
                    height: 400,
                }}>
                <DateTimePicker
                    value={dateToSelect}
                    maximumDate={new Date()}
                    // TODO: set minimumDate prop
                    mode="date"
                    display="default"
                    onChange={(event, newDate) => setDateToSelect(newDate)}
                />
                <Button
                    label="Save"
                    variant="brand"
                    onPress={() => {
                        setNewDate(dateToSelect);
                        onRequestClose();
                    }}
                />
            </View>
        </NativeModal>
    );
}
