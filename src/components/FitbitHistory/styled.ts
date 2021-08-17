import styled from 'styled-components/native';
import { Button, ButtonIcon, ProgressBar } from 'react-native-rainbow';
import { ChevronLeft, ChevronRight, Moon, ChevronDown, Shoe } from '../Icons';
import CardItem from '../CardItem';
import Section from '../Section';
import {
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_GRAY_2,
    COLOR_GRAY_TRANSPARENT_1,
    COLOR_DARK_1,
} from '../../styles/colors';

interface Props {
    disabled?: boolean;
}

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

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.ScrollView`
    padding: 8px 0 0 0;
`;

export const SectionContainer = styled(Section)`
    width: 100%;
`;

export const TotalContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

export const ScoreCard = styled.View`
    margin: 8px 20px;
    padding: 15px 20px 20px 20px;
    box-shadow: 0 2px 6px rgba(164, 167, 181, 0.25);
    background-color: ${COLOR_WHITE};
    border-radius: 20px;
`;

export const ScoreContainer = styled.View`
    padding: 12px 8px 8px 4px;
    flex: 2;
    align-items: center;
`;
export const Score = styled(ProgressBar)`
    flex: 1;
`;

export const ActivitiesContainer = styled.View`
    padding: 0 0 0 16px;
    justify-content: space-between;
    flex: 2;
`;

export const ScoreActivityIcon = styled(Shoe)`
    width: 32px;
    height: 32px;
`;

export const DateFilterContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
    border-bottom-color: rgba(0, 0, 0, 0.06);
    border-bottom-width: 1px;
    background-color: ${COLOR_WHITE};
`;

export const DateButtonSelector = styled(Button)`
    height: 36px;
    line-height: 36px;
`;

export const DateButtonIcon = styled(ChevronDown)`
    width: 12;
    height: 12;
    color: ${COLOR_BRAND};
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`;

export const Activities = styled.View`
    margin: 4px 12px;
`;

export const CardDailyItem = styled(CardItem)`
    flex: 2;
    margin: 6px;
    box-shadow: 0 2px 6px rgba(164, 167, 181, 0.25);
`;

export const CardDailyItemIconContainer = styled.View`
    height: 86px;
    width: 86px;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR_GRAY_TRANSPARENT_1};
    border-radius: 48px;
`;

export const CardDailyItemIcon = styled(Moon)`
    height: 40px;
    width: 40px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_2};
`;

export const ButtonIconFilter = styled(ButtonIcon)<Props>`
    ${props =>
        props.disabled &&
        `
            background-color: ${COLOR_WHITE};
        `};
`;

export const OneItem = styled.View`
    width: 50%;
`;

export const ScoreHealthContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin: 0 20px 12px 20px;
    padding: 20px 0;
    box-shadow: 0 2px 6px rgba(164, 167, 181, 0.25);
    background-color: ${COLOR_WHITE};
    border-radius: 20px;
`;

export const ActiveZonesContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ScoreSectionContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 8px;
`;

export const ScoreSectionLabel = styled.Text`
    font-size: 20px;
    color: ${COLOR_DARK_1};
    font-weight: 500;
    letter-spacing: 0.25;
`;
