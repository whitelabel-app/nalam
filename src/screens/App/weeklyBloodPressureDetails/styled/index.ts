import styled from 'styled-components/native';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import { ButtonIcon } from 'react-native-rainbow';
import {
    COLOR_WHITE,
    COLOR_GRAY_TRANSPARENT_3,
    COLOR_GRAY_TRANSPARENT_1,
} from '../../../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_GRAY_TRANSPARENT_1};
    width: 100%;
`;

interface Props {
    color?: string;
}

export const TopBar = styled.SafeAreaView<Props>`
    height: auto;
    box-shadow: 0 0 1px ${COLOR_GRAY_TRANSPARENT_3};
    background-color: #ff5555;
    margin-bottom: 0px;
`;

export const BackButton = styled(ButtonIcon)`
    margin: 0 24px 0 8px;
    margin-bottom: 20px;
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

export const TopBarIcon = styled(ArrowLeft)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const TotalContainer = styled.View`
    justify-content: flex-end;
    margin-right: 12px;
    margin-bottom: 24px;
`;

export const TitleContainer = styled.View`
    height: auto;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
`;

export const SectionHeader = styled.View`
    width: 100%;
    padding: 4px 12px;
    background-color: #ff5555;
`;

export const LabelHeader = styled.Text`
    font-size: 14;
    font-weight: 700;
    color: ${COLOR_WHITE};
`;

export const SectionContainer = styled.View`
    background-color: ${COLOR_GRAY_TRANSPARENT_1};
    width: 100%;
    justify-content: flex-start;
`;
