import styled from 'styled-components/native';
import { COLOR_DARK_1 } from '../../../styles/colors';
import { FaceHappy } from '../../Icons';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

interface Props {
    size?: 'small' | 'medium';
}

export const FaceIcon = styled(FaceHappy)<Props>`
    width: 12px;
    height: 12px;
    margin-right: 4px;

    ${props =>
        props.size === 'medium' &&
        `
        height: 18px;
        width: 18px;
        margin-right: 8px;
    `}
`;

export const LabelText = styled.Text<Props>`
    font-size: 14px;
    color: ${COLOR_DARK_1};
    font-weight: 200;

    ${props =>
        props.size === 'medium' &&
        `
        font-size: 16px;
    `}
`;
