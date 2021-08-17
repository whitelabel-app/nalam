import React from 'react';
import MoodOutput from '../MoodOutput';
import { Container, Progress } from './styled';

export default function ActivityScore(props) {
    const { style, label, icon, variant, value, size, moodSize } = props;

    return (
        <Container style={style}>
            <Progress size={size} icon={icon} variant={variant} value={value} />
            <MoodOutput size={moodSize} label={label} />
        </Container>
    );
}
