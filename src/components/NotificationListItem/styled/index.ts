import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { ChevronRight } from '../../Icons';
import {
    COLOR_DARK_1,
    COLOR_GRAY_3,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_BRAND,
    COLOR_GRAY_2,
} from '../../../styles/colors';

interface Props {
    icon?: ReactNode;
    actions?: ReactNode;
    isNotRead?: boolean;
}

export const StyledContainer = styled.TouchableOpacity`
    padding: 20px 0 0 0;
    flex-direction: row;
    margin-left: 12px;
    flex-shrink: 1;
`;

export const StyledView = styled.View`
    padding: 20px 0 0 0;
    flex-direction: row;
    margin-left: 12px;
    flex-shrink: 1;
`;

export const StyledContentContainer = styled.View<Props>`
    border-bottom-width: 1px;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    flex-shrink: 1;
    padding-right: 12px;

    ${props =>
        props.actions &&
        `
            padding-bottom: 16px;
        `};
`;

export const StyledContent = styled.Text<Props>`
    font-size: 18;
    color: ${COLOR_DARK_1};
    letter-spacing: 0.25;
    flex-wrap: wrap;

    ${props =>
        props.isNotRead &&
        `
            font-weight: 700;
        `};
`;

export const StyledDescription = styled.Text`
    font-size: 16px;
    line-height: 22px;
    color: rgb(87, 101, 116);
    margin: 12px 8px 0 0;
    letter-spacing: 0.5;
`;

export const StyledDate = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
    margin: 12px 0;
    letter-spacing: 0.5;
`;

export const StyledIcon = styled.View`
    width: 8px;
    height: 8px;
    background-color: ${COLOR_BRAND};
    border-radius: 8px;
    align-self: center;
    margin-left: 8px;
    margin-bottom: 12px;
`;

export const StyledInfo = styled.View`
    flex-grow: 1;
    margin-left: 12px;
`;

export const StyledLoadingContainer = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
`;

export const StyledMainLoadingBar = styled.View`
    width: 60%;
    height: 10px;
    background-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-radius: 10px;
    margin-top: 4px;
`;

export const StyledSecondaryLoadingBar = styled.View`
    width: 40%;
    height: 10px;
    background-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-radius: 10px;
    margin-top: 8px;
`;

export const StyledLoadingCircle = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 56px;
    background-color: ${COLOR_GRAY_TRANSPARENT_2};
    margin: 0 16px 20px 12px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_2};
    align-self: center;
    margin-bottom: 20px;
`;
