import styled from 'styled-components/native';
import { ButtonIcon, Button } from 'react-native-rainbow';
import { ChevronRight, Moon, ChevronLeft, ChevronDown } from '../Icons';
import CardListItem from '../CardListItem';
import {
    COLOR_GRAY_2,
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_GRAY_TRANSPARENT_1,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../styles/colors';

export const CardItemIcon = styled(Moon)`
    height: 36px;
    width: 36px;
`;

export const WeeklyItemCard = styled(CardListItem)`
    margin: 0 16px 8px 16px;
    padding: 12px;
    box-shadow: 0 2px 6px rgba(164, 167, 181, 0.25);
`;

export const CardItemIconContainer = styled.View`
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR_GRAY_TRANSPARENT_1};
    border-radius: 48px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_2};
`;

export const DateFilterContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
    background-color: ${COLOR_WHITE};
    border-bottom-color: rgba(0, 0, 0, 0.06);
    border-bottom-width: 1px;
`;

interface Props {
    disabled?: boolean;
}

export const ButtonIconFilter = styled(ButtonIcon)<Props>`
    ${props =>
        props.disabled &&
        `
            background-color: ${COLOR_WHITE};
        `};
`;

export const DateButtonSelector = styled(Button)`
    height: 36px;
    line-height: 36px;
`;

export const ChevronFilterButtonIcon = styled(ChevronLeft)<Props>`
    width: 22%;
    height: 45%;
    color: ${COLOR_BRAND};

    ${props =>
        props.disabled &&
        `
            color: ${COLOR_GRAY_TRANSPARENT_2};
        `};
`;

export const DateButtonIcon = styled(ChevronDown)`
    width: 12;
    height: 12;
    color: ${COLOR_BRAND};
`;
