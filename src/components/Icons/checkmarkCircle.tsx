import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const CheckmarkCircle: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 14 14" style={style}>
        <Path
            d="M7 0c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm3.548 4.692a.583.583 0 00-.825 0L6.343 8.07 4.86 6.588a.583.583 0 10-.824.824L5.93 9.308a.582.582 0 00.825 0l3.792-3.791a.583.583 0 000-.825z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

CheckmarkCircle.propTypes = {
    style: PropTypes.object,
};

CheckmarkCircle.defaultProps = {
    style: undefined,
};

export default CheckmarkCircle;
