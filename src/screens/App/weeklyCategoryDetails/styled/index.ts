import styled from 'styled-components/native';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import { ButtonIcon } from 'react-native-rainbow';
import {
    COLOR_WHITE,
    COLOR_GRAY_TRANSPARENT_3,
    COLOR_GRAY_TRANSPARENT_1,
    COLOR_SUCCESS_ACTIVE,
} from '../../../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_GRAY_TRANSPARENT_1};
    width: 100%;
`;

export const TitleContainer = styled.View`
    height: auto;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
`;

export const ChartContainer = styled.View`
    align-self: center;
    padding-right: 15;
`;

interface Props {
    color?: string;
}

export const TopBar = styled.SafeAreaView<Props>`
    height: auto;
    box-shadow: 0 0 1px ${COLOR_GRAY_TRANSPARENT_3};
    background-color: ${props => props.color || COLOR_SUCCESS_ACTIVE};
    margin-bottom: 2px;
`;

export const BackButton = styled(ButtonIcon)`
    margin: 0 24px 0 8px;
    margin-bottom: 20px;
`;

export const TopBarIcon = styled(ArrowLeft)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

interface TitleProps {
    isCenter?: boolean;
}

export const Title = styled.Text<TitleProps>`
    font-size: 24;
    color: ${COLOR_WHITE};
    letter-spacing: 0.25;
    margin: 0;
    font-weight: 600;
    text-align: center;
    margin-bottom: 24px;

    ${props =>
        props.isCenter &&
        `
            margin-right: 40px;
        `};
`;

export const TotalContainer = styled.View`
    justify-content: flex-end;
    margin-right: 12px;
    margin-bottom: 24px;
`;

export const Value = styled.Text`
    font-size: 16;
    color: ${COLOR_WHITE};
    text-align: right;
    font-weight: 900;
`;

export const Total = styled.Text`
    font-size: 14;
    color: ${COLOR_WHITE};
    text-align: right;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 16px;
    margin-bottom: 16px;
`;

export const Label = styled.Text`
    font-size: 18;
    text-transform: uppercase;
    font-weight: 700;
`;
