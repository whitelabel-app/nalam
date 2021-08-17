import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const ChevronLeft: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 10 18" style={style}>
        <Path
            d="M8.472 1.043a.747.747 0 011.056 1.056L2.626 9l6.902 6.901c.267.268.29.687.067.98l-.067.076a.747.747 0 01-1.056 0L1.08 9.566A.745.745 0 01.862 9a.745.745 0 01.218-.566z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

ChevronLeft.propTypes = {
    style: PropTypes.object,
};

ChevronLeft.defaultProps = {
    style: undefined,
};

export default ChevronLeft;
