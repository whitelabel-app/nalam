import { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
    COLOR_DARK_1,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_GRAY_3,
} from '../../../styles/colors';
import { ChevronRight } from '../../Icons';

interface Props {
    icon?: ReactNode;
    date?: ReactNode;
    onPress?: (event?: any) => void;
}

export const StyledContainer = styled.TouchableOpacity`
    padding: 12px 0 0 12px;
    width: 100%;
    flex-direction: row;
`;

export const StyledView = styled.View`
    padding: 12px 0 0 12px;
    width: 100%;
    flex-direction: row;
`;

export const StyledContent = styled.View`
    justify-content: center;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
    flex-grow: 1;
    padding-bottom: 16px;
`;

export const StyledLabel = styled.Text`
    font-size: 16px;
    color: ${COLOR_DARK_1};
    letter-spacing: 0.25;
`;

export const StyledDescription = styled.Text`
    font-size: 14px;
    color: ${COLOR_GRAY_3};
    letter-spacing: 0.25;
    margin-top: 4px;
`;

export const StyledDayContainer = styled.View`
    justify-content: center;
    align-self: center;
    width: 52px;
    height: 52px;
    background-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-radius: 4px;
    margin-right: 16px;
    margin-bottom: 16px;
`;

export const Day = styled.Text`
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    color: ${COLOR_DARK_1};
`;

export const StyledRightElementContainer = styled.View<Props>`
    padding-bottom: 16px;
    padding-right: 16px;
    justify-content: center;
    align-items: flex-end;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;

    ${props =>
        props.date &&
        props.onPress &&
        `
            justify-content: space-between;
        `};
`;

export const StyledDate = styled.Text`
    font-size: 14px;
    color: ${COLOR_GRAY_3};
    letter-spacing: 0.25;
    margin-bottom: 12px;
`;

export const StyledArrowRightIcon = styled(ChevronRight)`
    color: ${COLOR_GRAY_3};
    height: 12px;
    width: 12px;
`;
