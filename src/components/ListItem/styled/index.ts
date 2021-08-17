import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { COLOR_DARK_1, COLOR_GRAY_3 } from '../../../styles/colors';

interface Props {
    icon?: ReactNode;
}

export const StyledContainer = styled.TouchableOpacity`
    padding: 16px 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 1;
`;

export const StyledView = styled.View`
    padding: 16px 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 1;
`;

export const StyledContentContainer = styled.View`
    flex-direction: row;
    flex-shrink: 1;
`;

export const StyledContent = styled.View<Props>`
    margin-left: 0;
    ${props =>
        props.icon &&
        `
            margin-left: 12px;
        `};
`;

export const StyledLabel = styled.Text`
    font-size: 18px;
    color: ${COLOR_DARK_1};
    letter-spacing: 0.5;
    margin: 0;
`;

export const StyledDescription = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
    margin-top: 4px;
    letter-spacing: 0.5;
    margin-right: 48px;
`;
