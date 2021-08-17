import styled from 'styled-components/native';
import { BellBorder } from '../../Icons';
import { COLOR_ERROR, COLOR_GRAY_3 } from '../../../styles/colors';

export const StyledContainer = styled.View`
    position: relative;
`;

export const StyledBadgeContainer = styled.View`
    background-color: ${COLOR_ERROR};
    position: absolute;
    right: -10;
    top: -6;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    box-shadow: 0 0 1px ${COLOR_ERROR};
`;

export const Badge = styled.Text`
    font-size: 12;
    color: white;
    font-weight: 800;
    text-align: center;
    line-height: 20px;
`;

export const StyledBellIcon = styled(BellBorder)`
    width: 28;
    height: 28;
    color: ${COLOR_GRAY_3};
`;
