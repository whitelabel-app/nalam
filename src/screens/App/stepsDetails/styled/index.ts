import styled from 'styled-components/native';
import { COLOR_WHITE } from '../../../../styles/colors';

export const TotalContainer = styled.View`
    color: ${COLOR_WHITE};
`;

export const TotalLabel = styled.Text`
    font-size: 14;
    color: ${COLOR_WHITE};
    text-align: right;
`;

export const ContentHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 4px 16px;
    margin-bottom: 16px;
    background-color: #05b1a4;
`;

export const ContentHeaderLabel = styled.Text`
    color: ${COLOR_WHITE};
    font-size: 14;
    font-weight: 700;
`;

export const ContentHeaderAvg = styled.Text`
    color: ${COLOR_WHITE};
    font-size: 14;
    font-weight: 500;
`;
