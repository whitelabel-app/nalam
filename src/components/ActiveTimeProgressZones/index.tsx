import React from 'react';
import { View } from 'react-native';
import { Label, TimeContainer } from './styled';
import FormattedMinutes from '../FormattedMinutes';

export default function ActiveTimeProgressZones(props) {
    const { style, label, minutes, variant } = props;

    return (
        <View style={style}>
            <Label>{label}</Label>
            <TimeContainer variant={variant}>
                <FormattedMinutes minutes={minutes} size={'medium'} />
            </TimeContainer>
        </View>
    );
}
