import React from 'react';
import { SafeAreaView } from 'react-navigation';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import {
    ModalContainerSelect,
    OptionContainer,
    OptionLabel,
    Option,
    OptionIcon,
    CheckmarkIcon,
} from './styled';
import { CalendarDailyBorder } from '../../../components/Icons';

export default function SelectViewType({ value, onChange }) {
    const isDaily = value === 'daily';
    const isWeekly = value === 'weekly';

    return (
        <SafeAreaView>
            <ModalContainerSelect>
                <OptionLabel>Select view type</OptionLabel>
                <OptionContainer onPress={() => onChange('daily')}>
                    <OptionIcon as={CalendarDailyBorder} />
                    <Option>Daily</Option>
                    <RenderIf isTrue={isDaily}>
                        <CheckmarkIcon />
                    </RenderIf>
                </OptionContainer>
                <OptionContainer onPress={() => onChange('weekly')}>
                    <OptionIcon />
                    <Option>Weekly</Option>
                    <RenderIf isTrue={isWeekly}>
                        <CheckmarkIcon />
                    </RenderIf>
                </OptionContainer>
            </ModalContainerSelect>
        </SafeAreaView>
    );
}
