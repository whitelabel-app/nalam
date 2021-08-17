import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const Checkmark: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 14 10" style={style}>
        <Path
            d="M13.367 2.033L5.783 9.616a1.164 1.164 0 01-1.65 0L.344 5.825a1.165 1.165 0 010-1.65 1.165 1.165 0 011.649 0l2.967 2.967L11.717.384a1.165 1.165 0 111.65 1.65z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

Checkmark.propTypes = {
    style: PropTypes.object,
};

Checkmark.defaultProps = {
    style: undefined,
};

export default Checkmark;
