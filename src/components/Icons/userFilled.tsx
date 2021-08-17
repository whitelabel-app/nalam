import React from 'react';
import PropTypes from 'prop-types';
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Use,
} from 'react-native-svg';
import { Style } from '../types';

const UserFilled: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 20 20" style={style}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__b">
                <Stop stopColor="#02E8D6" stopOpacity={0.39} offset="0%" />
                <Stop stopColor="#00B3B5" offset="100%" />
            </LinearGradient>
            <Path
                d="M0 16.629c2.092-3.36 5.541-5.455 9.995-5.455 4.238 0 7.903 2.408 10.005 5.455 0 0-3.333 3.371-10.005 3.371C3.333 20 0 16.686 0 16.629z"
                id="prefix__a"
            />
        </Defs>
        <G fillRule="nonzero" fill="none">
            <Path
                d="M10 9a4.505 4.505 0 01-4.5-4.5C5.5 2.018 7.518 0 10 0s4.5 2.018 4.5 4.5S12.482 9 10 9z"
                fill="#F5D4BB"
            />
            <G transform="translate(.005)">
                <Use fill="#00D8C7" xlinkHref="#prefix__a" />
                <Use fill="url(#prefix__b)" xlinkHref="#prefix__a" />
            </G>
        </G>
    </Svg>
);

UserFilled.propTypes = {
    style: PropTypes.object,
};

UserFilled.defaultProps = {
    style: undefined,
};

export default UserFilled;
