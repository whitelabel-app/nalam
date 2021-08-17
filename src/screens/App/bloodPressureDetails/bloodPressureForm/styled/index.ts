import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-rainbow';
import AccordionSection from '../../../../../components/AccordionSection';
import { COLOR_DARK_1, COLOR_GRAY_3 } from '../../../../../styles/colors';

interface Props {
    icon?: ReactNode;
}

export const Container = styled.View`
    padding: 12px 0 8px 24px;
    flex: 1;
`;

export const Accordion = styled(AccordionSection)`
    padding-right: 16px;
`;

export const StyledButton = styled(Button)`
    margin: 32px 24px 32px 0;
`;

export const RightText = styled.Text`
    font-size: 16;
    color: ${COLOR_DARK_1};
    font-weight: 500;
`;

export const RightContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    font-size: 16;
    color: ${COLOR_DARK_1};
    font-weight: 700;
    margin: 0 2px;
`;

export const Label = styled.Text`
    font-size: 16;
    color: ${COLOR_GRAY_3};
    font-weight: 400;
    margin: 0 2px 0 8px;
`;

interface HeartRateLabelProps {
    variant?: 'grey' | 'normal';
}

export const HeartRateLabelText = styled.Text<HeartRateLabelProps>`
    ${props => props.variant === 'grey' && `color: ${COLOR_GRAY_3};`}
`;
