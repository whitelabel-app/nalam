import { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
    COLOR_DARK_1,
    COLOR_GRAY_3,
    COLOR_WHITE,
} from '../../../styles/colors';

interface Props {
    icon?: ReactNode;
}

export const StyledCard = styled.View`
    padding: 16px 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLOR_WHITE};
    border-radius: 20px;
    box-shadow: 0 2px 6px rgba(164, 167, 181, 0.25);
`;

export const StyledLeftContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const StyledLeftContent = styled.View<Props>`
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
`;

export const StyledDescription = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
    margin-top: 4px;
    letter-spacing: 0.5;
`;
