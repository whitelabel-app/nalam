import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const Plus: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 22 22" style={style}>
        <Path
            d="M20.94 9.877a1.068 1.068 0 110 2.135h-8.928v8.92a1.068 1.068 0 01-2.136 0v-8.92H1.068a1.068 1.068 0 110-2.135h8.808v-8.81a1.068 1.068 0 012.136 0v8.81h8.928z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

Plus.propTypes = {
    style: PropTypes.object,
};

Plus.defaultProps = {
    style: undefined,
};

export default Plus;
