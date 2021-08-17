import styled from 'styled-components/native';
import { Button, ButtonIcon } from 'react-native-rainbow';
import { Close } from '../../../../../components/Icons';
import { COLOR_WHITE } from '../../../../../styles/colors';

export const Container = styled.View`
    flex: 1;
`;

export const TopContent = styled.ImageBackground`
    height: 30%;
    width: 100%;
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
`;

export const Gradient = styled.View`
    height: 100%;
    width: 100%;
    background-color: rgba(44, 45, 59, 0.4);
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
`;

export const Header = styled.SafeAreaView`
    margin: 0 8px;
    position: relative;
`;

export const CloseButton = styled(ButtonIcon)`
    position: absolute;
    top: 40px;
    right: 0;
`;

export const CloseIcon = styled(Close)`
    color: ${COLOR_WHITE};
    width: 20px;
    height: 20px;
`;

export const Title = styled.Text`
    font-size: 24;
    color: ${COLOR_WHITE};
    letter-spacing: 0.5;
    margin: 36px 12px 12px 12px;
    text-align: center;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: ${COLOR_WHITE};
    margin: 16px;
    text-align: center;
    font-weight: 600;
`;

export const BottomContent = styled.ScrollView`
    padding: 32px 20px 20px 20px;
`;

export const CreateButton = styled(Button)`
    margin-top: 32px;
`;
