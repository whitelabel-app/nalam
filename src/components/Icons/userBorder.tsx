import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const UserBorder: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 20 20" style={style}>
        <Path
            d="M10 12c4.581 0 7.923 3.135 9.956 7.337.116.24-.006.519-.272.623-.267.105-.577-.005-.693-.245-1.871-3.868-4.845-6.767-8.991-6.767s-7.12 2.9-8.991 6.767c-.116.24-.426.35-.693.245-.266-.104-.388-.383-.272-.623C2.077 15.135 5.419 12 10 12zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 .91A4.096 4.096 0 005.91 5 4.096 4.096 0 0010 9.09 4.096 4.096 0 0014.09 5 4.096 4.096 0 0010 .91z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

UserBorder.propTypes = {
    style: PropTypes.object,
};

UserBorder.defaultProps = {
    style: undefined,
};

export default UserBorder;
