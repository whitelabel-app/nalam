import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const CloseCircle: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 14 14" style={style}>
        <Path
            d="M7 0c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zM4.148 3.898l-.059.07a.505.505 0 00.059.644L6.535 7 4.148 9.388a.505.505 0 00.357.862l.079-.006a.506.506 0 00.277-.14l2.39-2.39 2.387 2.388a.504.504 0 00.713.001l.059-.07a.505.505 0 00-.058-.645L7.965 7l2.386-2.387a.505.505 0 000-.714l-.07-.059a.505.505 0 00-.644.059L7.25 6.285 4.862 3.898a.505.505 0 00-.714 0z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

CloseCircle.propTypes = {
    style: PropTypes.object,
};

CloseCircle.defaultProps = {
    style: undefined,
};

export default CloseCircle;
