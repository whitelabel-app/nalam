import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-rainbow';
import { COLOR_DARK_1, COLOR_GRAY_3 } from '../../../styles/colors';

interface Props {
    icon?: ReactNode;
}

export const StyledCard = styled(Card)`
    padding: 12px 12px 8px 12px;
    width: 100%;
    border-radius: 22px;
`;

export const StyledLabel = styled.Text`
    font-size: 14px;
    color: ${COLOR_GRAY_3};
    letter-spacing: 0.25;
    text-transform: uppercase;
    margin-bottom: 8px;
`;

export const StyledIconContainer = styled.View`
    margin: 0 auto;
    align-self: center;
`;

export const StyledValue = styled.Text`
    font-size: 18px;
    color: ${COLOR_DARK_1};
    margin-top: 8px;
    letter-spacing: 0.25;
    text-align: center;
`;
