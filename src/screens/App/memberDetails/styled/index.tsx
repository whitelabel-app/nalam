import styled from 'styled-components/native';
import { Avatar } from 'react-native-rainbow';
import { ButtonIcon } from 'react-native-rainbow';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import {
    COLOR_WHITE,
    COLOR_DARK_1,
    BACKGROUND_COLOR_1,
} from '../../../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${BACKGROUND_COLOR_1};
    justify-content: space-between;
`;

export const TopContent = styled.View`
    background-color: ${COLOR_WHITE};
    width: 100%;
    align-items: center;
    margin-bottom: 1px;
`;
export const Background = styled.ImageBackground`
    height: 140px;
    width: 100%;
`;

export const Gradient = styled.View`
    height: 100%;
    width: 100%;
    background-color: rgba(44, 45, 59, 0.4);
`;

export const TopBar = styled.SafeAreaView`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const BackButton = styled(ButtonIcon)`
    position: absolute;
    top: 32px;
    left: 8;
`;

export const TopBarIcon = styled(ArrowLeft)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const UserAvatar = styled(Avatar)`
    width: 90px;
    height: 90px;
    border-radius: 100px;
    border: 4px solid ${COLOR_WHITE};
    margin-top: -50px;
`;

export const Title = styled.Text`
    font-size: 24;
    font-weight: 300;
    letter-spacing: 1;
    text-align: center;
    color: ${COLOR_DARK_1};
    margin-top: 8px;
    margin-bottom: 16px;
`;

export const HistoryContainer = styled.View`
    flex: 1;
`;
