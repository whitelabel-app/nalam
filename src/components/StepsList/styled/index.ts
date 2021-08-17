import styled from 'styled-components/native';
import MoodOutput from '../../MoodOutput';
import { FaceHappy } from '../../Icons';
import { COLOR_GRAY_3 } from '../../../styles/colors';

export const MoodContainer = styled.View`
    flex-direction: row;
    margin-top: 8px;
`;

export const MoodIcon = styled(FaceHappy)`
    height: 18px;
    width: 18px;
    margin-right: 4px;
`;

export const Mood = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
`;

export const MoodOutputContainer = styled(MoodOutput)`
    margin-top: 6px;
`;
