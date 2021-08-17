import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const ChevronRight: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 7 12" style={style}>
        <Path
            d="M.513.608a.613.613 0 00.064.79l4.454 4.454-4.454 4.454a.613.613 0 00.867.867L6.307 6.31a.61.61 0 00.177-.38v-.144a.615.615 0 00-.177-.392L1.444.532a.613.613 0 00-.867 0L.513.608z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

ChevronRight.propTypes = {
    style: PropTypes.object,
};

ChevronRight.defaultProps = {
    style: undefined,
};

export default ChevronRight;
