import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';
import { Style } from '../types';

const BellFilled: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 19 20" style={style}>
        <G fillRule="nonzero" fill="none">
            <Path
                d="M10.47 17.677a2.38 2.38 0 11-4.621-1.152 2.38 2.38 0 014.62 1.152zM11.354 5.72a1.361 1.361 0 01-.991-1.65l.658-2.64a1.361 1.361 0 012.64.658l-.658 2.64a1.361 1.361 0 01-1.65.991z"
                fill="#FFA000"
            />
            <Path
                d="M16.295 16.111a5.308 5.308 0 01-.847-4.398l.534-2.144A5.556 5.556 0 0011.94 2.84a5.556 5.556 0 00-6.727 4.042l-.535 2.145a5.316 5.316 0 01-2.822 3.49 1.389 1.389 0 00.285 2.587l12.693 3.165a1.389 1.389 0 001.46-2.159z"
                fill="#FFC107"
            />
            <Path
                d="M18.534 8.947a.293.293 0 00-.402-.091.288.288 0 00-.093.398 2.73 2.73 0 01.352 2.09 2.752 2.752 0 01-1.241 1.727.287.287 0 00.089.527.293.293 0 00.22-.037 3.326 3.326 0 001.5-2.086 3.3 3.3 0 00-.425-2.528zm-1.328.29a.293.293 0 00-.402-.092.287.287 0 00-.093.398c.56.887.286 2.06-.609 2.613a.287.287 0 00.09.527.292.292 0 00.22-.036 2.464 2.464 0 00.794-3.41zM2.898 5.578a.293.293 0 00-.402-.092 3.327 3.327 0 00-1.5 2.087A3.3 3.3 0 001.42 10.1a.29.29 0 00.402.092.287.287 0 00.093-.398 2.73 2.73 0 01-.352-2.091 2.752 2.752 0 011.241-1.727.287.287 0 00.093-.398zm1.065.837a.293.293 0 00-.402-.092 2.464 2.464 0 00-.794 3.41.29.29 0 00.402.092.287.287 0 00.093-.398 1.888 1.888 0 01.609-2.613.287.287 0 00.092-.399z"
                fill="#DAE0E5"
            />
        </G>
    </Svg>
);

BellFilled.propTypes = {
    style: PropTypes.object,
};

BellFilled.defaultProps = {
    style: undefined,
};

export default BellFilled;