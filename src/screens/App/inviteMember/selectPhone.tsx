import React from 'react';
import {
    ModalContainer,
    OptionContainer,
    OptionLabel,
    OptionDescription,
} from './styled';
import { SafeAreaView } from 'react-navigation';

function PhoneNumbers({ data, onSelectPhone }) {
    return data.map((phone, index) => {
        const key = `phone-${index}`;
        const { label, number } = phone;
        return (
            <OptionContainer key={key} onPress={() => onSelectPhone(number)}>
                <OptionLabel>{label}</OptionLabel>
                <OptionDescription>{number}</OptionDescription>
            </OptionContainer>
        );
    });
}

export default function SelectPhone({ contact, onSelectPhone }) {
    return (
        <SafeAreaView>
            <ModalContainer>
                <PhoneNumbers
                    data={contact.phoneNumbers}
                    onSelectPhone={onSelectPhone}
                />
            </ModalContainer>
        </SafeAreaView>
    );
}
