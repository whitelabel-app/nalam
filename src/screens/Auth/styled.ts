import styled from 'styled-components/native';
import { Button, InputPhone, ButtonIcon } from 'react-native-rainbow';
import ArrowRight from 'react-native-rainbow/dist/components/Icons/arrowRight';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import { Logo } from '../../components/Icons';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_DARK_1,
    COLOR_BRAND,
} from '../../styles/colors';

export const HomeContainer = styled.SafeAreaView`
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin: 86px 32px 32px 32px;
`;

export const StartButton = styled(Button)`
    width: 100%;
`;

export const Container = styled.View`
    align-items: center;
    flex: 1;
`;

export const HeaderContainer = styled.SafeAreaView`
    width: 100%;
    align-items: center;
    background-color: ${COLOR_WHITE};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px 0 8px;
    width: 100%;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
    color: ${COLOR_GRAY_3};
    width: 24;
    height: 24;
`;

export const Steps = styled.Text`
    font-size: 18;
    color: ${COLOR_DARK_1};
    font-weight: 800;
    letter-spacing: 1.2;
`;

export const LogoSvg = styled(Logo)`
    height: 32;
    width: 120;
    margin-bottom: 16;
`;

export const Content = styled.SafeAreaView`
    width: 100%;
    align-items: center;
`;

export const ContentScroll = styled.ScrollView`
    padding: 0 24px 0 24px;
    width: 100%;
`;

export const BottomBar = styled.View`
    padding: 32px 24px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BottomText = styled.Text`
    font-size: 16;
    line-height: 24;
    color: ${COLOR_GRAY_3};
    flex-shrink: 1;
`;

export const Title = styled.Text`
    font-size: 28;
    color: ${COLOR_BRAND};
    margin: 40px 0 24px 0;
    text-align: center;
`;

export const InputPhoneNumber = styled(InputPhone)`
    width: 100%;
`;

export const NextButton = styled(ButtonIcon)`
    align-self: flex-end;
    margin-left: 24;
`;

export const ArrowRightIcon = styled(ArrowRight)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const TextInfo = styled.Text`
    font-size: 16;
    color: ${COLOR_GRAY_3};
    margin-bottom: 24px;
    text-align: center;
    line-height: 24;
    text-align: center;
    padding: 0 24px;
`;

export const TermsAndCond = styled.Text`
    color: ${COLOR_BRAND};
`;

export const Link = styled.TouchableOpacity``;
