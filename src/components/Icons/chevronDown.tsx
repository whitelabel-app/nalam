import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const ChevronDown: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 12 7" style={style}>
        <Path
            d="M11.288.572a.613.613 0 00-.791.064L6.043 5.09 1.59.636a.613.613 0 00-.867.867l4.862 4.862a.61.61 0 00.381.178h.144a.615.615 0 00.391-.178l4.863-4.862a.613.613 0 000-.867l-.076-.064z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

ChevronDown.propTypes = {
    style: PropTypes.object,
};

ChevronDown.defaultProps = {
    style: undefined,
};

export default ChevronDown;
