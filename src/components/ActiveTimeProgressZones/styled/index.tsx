import styled from 'styled-components/native';
import {
    COLOR_GRAY_3,
    COLOR_ERROR,
    COLOR_ORANGE,
    COLOR_WARNING,
    COLOR_DARK_1,
} from '../../../styles/colors';

export type Variants = 'brand' | 'warning' | 'error' | 'default';
interface Props {
    variant?: Variants;
}

export const Label = styled.Text`
    text-transform: uppercase;
    font-size: 12;
    color: ${COLOR_GRAY_3};
`;

export const TimeContainer = styled.Text<Props>`
    flex-direction: row;
    align-items: flex-end;
    color: ${COLOR_ORANGE};
    ${props =>
        props.variant === 'default' &&
        `
            color: ${COLOR_DARK_1};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            color: ${COLOR_WARNING};
        `};

    ${props =>
        props.variant === 'error' &&
        `
            color: ${COLOR_ERROR};
        `};
`;
