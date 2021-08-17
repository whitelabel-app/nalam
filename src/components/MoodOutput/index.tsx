import React from 'react';
import PropTypes from 'prop-types';
import { FaceHappy, FaceNeutral, FaceSad } from '../Icons';
import { Container, LabelText, FaceIcon } from './styled';

const faceIconMap = {
    Low: FaceSad,
    Underweight: FaceNeutral,
    Healthy: FaceHappy,
    Overweight: FaceNeutral,
    Obese: FaceSad,
    Normal: FaceNeutral,
    Moderate: FaceNeutral,
    Fair: FaceNeutral,
    Good: FaceHappy,
    Active: FaceHappy,
    'Highly Active': FaceHappy,
    Athletic: FaceHappy,
    'Low BP': FaceSad,
    'High BP': FaceSad,
    'Hypertension Crisis': FaceSad,
    Elevated: FaceSad,
};

const Label = ({ size, content }) => {
    if (typeof content === 'string' || typeof content === 'number') {
        return <LabelText size={size}>{content}</LabelText>;
    }
    return content;
};

export default function MoodOutput(props) {
    const { style, label, size } = props;
    const icon = faceIconMap[label] || FaceNeutral;

    return (
        <Container style={style}>
            <FaceIcon size={size} as={icon} />
            <Label size={size} content={label} />
        </Container>
    );
}

MoodOutput.propTypes = {
    style: PropTypes.object,
    label: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium']),
};

MoodOutput.defaultProps = {
    style: undefined,
    label: '',
    size: 'small',
};
