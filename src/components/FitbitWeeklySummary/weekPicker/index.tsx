import React from 'react';
import { Platform } from 'react-native';
import AndroidWeekPicker from './android';
import IosWeekPicker from './ios';

export default function DatePicker(props) {
    if (Platform.OS === 'android') {
        return <AndroidWeekPicker {...props} />;
    }
    if (Platform.OS === 'ios') {
        return <IosWeekPicker {...props} />;
    }
    return null;
}
