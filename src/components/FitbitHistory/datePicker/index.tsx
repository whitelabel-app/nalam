import React from 'react';
import { Platform } from 'react-native';
import AndroidDatePicker from './android';
import IosDatePicker from './ios';

export default function DatePicker(props) {
    if (Platform.OS === 'android') {
        return <AndroidDatePicker {...props} />;
    }
    if (Platform.OS === 'ios') {
        return <IosDatePicker {...props} />;
    }
    return null;
}
