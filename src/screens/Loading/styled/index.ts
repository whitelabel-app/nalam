import styled from 'styled-components/native';
import {
    COLOR_BRAND,
    COLOR_GRAY_TRANSPARENT_3,
    COLOR_WHITE,
    COLOR_GRAY_3,
} from '../../../styles/colors';

export const Container = styled.SafeAreaView<{ transparent?: boolean }>`
    flex: 1;
    justify-content: center;
    align-items: center;
    ${props =>
        `background-color: ${
            props.transparent ? COLOR_GRAY_TRANSPARENT_3 : COLOR_WHITE
        }`}
`;

export const Title = styled.Text`
    font-size: 20;
    font-weight: 600;
    letter-spacing: 0.25;
    text-align: center;
    color: ${COLOR_BRAND};
    margin-top: 32px;
`;

export const Description = styled.Text`
    font-size: 16;
    font-weight: 400;
    letter-spacing: 0.25;
    text-align: center;
    color: ${COLOR_GRAY_3};
    margin-top: 12px;
`;
