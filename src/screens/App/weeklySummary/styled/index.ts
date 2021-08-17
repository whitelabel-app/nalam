import styled from 'styled-components/native';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import { ButtonIcon } from 'react-native-rainbow';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_DARK_1,
    COLOR_GRAY_TRANSPARENT_3,
    COLOR_GRAY_TRANSPARENT_1,
} from '../../../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_GRAY_TRANSPARENT_1};
    width: 100%;
`;

export const Header = styled.SafeAreaView`
    height: 120px;
    padding-top: 12px;
    box-shadow: 0 0 1px ${COLOR_GRAY_TRANSPARENT_3};
    background-color: ${COLOR_WHITE};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
`;

export const LeftContent = styled.View`
    flex-direction: row;
    align-items: center;
    flex-shrink: 1;
`;

export const BackButton = styled(ButtonIcon)`
    margin: 0 8px;
`;

export const HeaderIcon = styled(ArrowLeft)`
    color: ${COLOR_GRAY_3};
    width: 24;
    height: 24;
`;

export const Title = styled.Text`
    font-size: 22;
    color: ${COLOR_DARK_1};
    letter-spacing: 0.5;
    flex-shrink: 1;
`;

export const Date = styled.Text`
    font-size: 16;
    color: ${COLOR_GRAY_3};
    letter-spacing: 0.25;
    margin: 0 12px 0 12px;
`;
