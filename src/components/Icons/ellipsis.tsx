import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const Ellipsis: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 24 6" style={style}>
        <Path
            d="M3 0C1.35 0 0 1.35 0 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm18 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm-9 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

Ellipsis.propTypes = {
    style: PropTypes.object,
};

Ellipsis.defaultProps = {
    style: undefined,
};

export default Ellipsis;
