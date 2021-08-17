import styled from 'styled-components/native';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import { Input, ButtonIcon, Button } from 'react-native-rainbow';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_DARK_1,
    COLOR_BRAND,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../../../styles/colors';
import { Magnifying } from '../../../../components/Icons';
import ListItem from '../../../../components/ListItem';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_WHITE};
`;

export const Header = styled.SafeAreaView`
    margin-top: 12px;
    width: 100%;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
`;

export const TopContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 12px 12px 0 12px;
    position: relative;
    width: 100%;
`;

export const HeaderButton = styled(ButtonIcon)`
    position: absolute;
    left: 0;
`;

export const HeaderIcon = styled(ArrowLeft)`
    color: ${COLOR_GRAY_3};
    width: 24;
    height: 24;
`;

export const Title = styled.Text`
    font-size: 24;
    color: ${COLOR_DARK_1};
    letter-spacing: 0.5;
    margin: 0 40px 0 40px;
    text-align: center;
`;

export const MagnifyingIcon = styled(Magnifying)`
    width: 20px;
    height: 20px;
    color: ${COLOR_BRAND};
`;

export const ContactItem = styled(ListItem)`
    margin-left: 20px;
    padding-left: 0;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
`;

export const InputSearch = styled(Input)`
    margin: 16px;
`;

export const ModalContainer = styled.View`
    background-color: white;
    margin: 0 16px 16px 16px;
    justify-content: space-between;
    border-radius: 30;
`;

export const OptionContainer = styled.TouchableOpacity`
    padding: 20px;
    width: 100%;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
    align-items: center;
    justify-content: center;
`;

export const OptionLabel = styled.Text`
    font-size: 14px;
    width: 100%;
    text-align: center;
    color: ${COLOR_GRAY_3};
    text-transform: uppercase;
    margin-bottom: 4px;
`;

export const OptionDescription = styled.Text`
    font-size: 16px;
    width: 100%;
    text-align: center;
    color: ${COLOR_BRAND};
`;

export const InviteButton = styled(Button)`
    height: 36px;
`;

export const TextInfo = styled.Text`
    font-size: 16px;
    color: ${COLOR_BRAND};
    margin-right: 12px;
`;
