import styled from 'styled-components/native';
interface Props {
    size?: 'small' | 'medium' | 'large';
}
export const TimeValue = styled.Text<Props>`
    font-size: 14;
    font-weight: 800;
    letter-spacing: 1;
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 18;
        `};
    ${props =>
        props.size === 'large' &&
        `
            font-weight: 700;
            font-size: 30;
        `};
`;

export const TimeContainer = styled.Text<Props>`
    font-weight: 500;
    font-size: 10;
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 14;
        `};
    ${props =>
        props.size === 'large' &&
        `  
            font-size: 17;
        `};
`;
