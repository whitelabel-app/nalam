import React from 'react';
import { ModalContainer, OptionContainer, OptionText } from './styled';
import { SafeAreaView } from 'react-navigation';

export default function GroupOptions({ navigation, onRequestClose }) {
    const {
        state: {
            params: { group },
        },
    } = navigation;

    return (
        <SafeAreaView>
            <ModalContainer>
                <OptionContainer
                    onPress={() => {
                        navigation.navigate('InviteMember', { group });
                        onRequestClose();
                    }}>
                    <OptionText>Invite Member</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <OptionText>Edit Group</OptionText>
                </OptionContainer>
                <OptionContainer>
                    <OptionText>Leave Group</OptionText>
                </OptionContainer>
            </ModalContainer>
        </SafeAreaView>
    );
}
