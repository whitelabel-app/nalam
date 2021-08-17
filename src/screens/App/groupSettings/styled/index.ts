import styled from 'styled-components/native';
import { Switch } from 'react-native';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import { ButtonIcon } from 'react-native-rainbow';
import { Moon, ChevronRight } from '../../../../components/Icons';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_DARK_1,
    COLOR_GRAY_TRANSPARENT_3,
    COLOR_GRAY_TRANSPARENT_1,
    COLOR_GRAY_2,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../../../styles/colors';

interface Props {
    isLast?: boolean;
}

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
    margin-right: 8px;
    align-items: center;
`;

export const BackButton = styled(ButtonIcon)`
    margin: 0 12px 0 8px;
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
    margin: 0 30px 0 0;
`;

export const CardItemIcon = styled(Moon)`
    height: 36px;
    width: 36px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_2};
`;

export const Content = styled.View`
    background-color: ${COLOR_WHITE};
    border-top-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-top-width: 1px;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
`;

export const Label = styled.Text`
    font-size: 16px;
    margin-left: 20px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const ItemContainer = styled.View<Props>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 12px 0;
    margin-left: 24px;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
    flex-grow: 1;
    flex-shrink: 1;

    ${props =>
        props.isLast &&
        `
            border-bottom-color: ${COLOR_WHITE};
        `};
`;

export const Left = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const IconContainer = styled.View`
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-color: rgb(242, 243, 244);
    align-items: center;
    justify-content: center;
    margin-right: 12px;
`;

export const SwitchContainer = styled(Switch)`
    margin-right: 16px;
`;

export const Icon = styled(Moon)`
    width: 20px;
    height: 20px;
`;

export const ItemLabel = styled.Text`
    font-size: 16px;
`;
