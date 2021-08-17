import styled from 'styled-components/native';
import { ProgressCircular } from 'react-native-rainbow';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Progress = styled(ProgressCircular)`
    margin-bottom: 4;
`;
