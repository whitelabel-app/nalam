import styled from 'styled-components/native';
import { COLOR_BRAND, COLOR_GRAY_TRANSPARENT_2 } from '../../styles/colors';

export const Container = styled.View`
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
`;
export const InnerContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
`;

interface Props {
    paddingRightVariant?: boolean;
}

export const RightContainer = styled.View<Props>`
    flex-direction: row;
    align-items: center;

    ${props => props.paddingRightVariant && 'padding-right: 30'}
`;

export const Label = styled.Text`
    color: ${COLOR_BRAND};
    font-size: 18;
`;
