import styled from 'styled-components/native';
import { ButtonIcon } from 'react-native-rainbow';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';

import {
    COLOR_WHITE,
    COLOR_GRAY_TRANSPARENT_1,
    COLOR_GRAY_TRANSPARENT_3,
} from '../../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_GRAY_TRANSPARENT_1};
    width: 100%;
`;

interface HeaderProps {
    color?: string;
    isCenter?: boolean;
}

export const Header = styled.SafeAreaView<HeaderProps>`
    height: auto;
    box-shadow: 0 0 1px ${COLOR_GRAY_TRANSPARENT_3};
    background-color: ${props => props.color || '#ff5555'};
    margin-bottom: 2px;
`;

export const TopHeader = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    align-content: center;
    margin-bottom: 10px;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const BackButton = styled(ButtonIcon)`
    margin-left: 8px;
`;
interface TitleProps {
    isCenter?: boolean;
}
export const Title = styled.Text<TitleProps>`
    font-size: 22;
    color: ${COLOR_WHITE};
    letter-spacing: 0.25;
    margin: 0;
    font-weight: 600;
    text-align: center;

    ${props =>
        props.isCenter &&
        `
            margin-right: 40px;
        `};
`;

export const TopHeaderRightContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 8px;
`;

export const HeaderBodyContainer = styled.View`
    align-self: center;
    padding-right: 15;
`;
