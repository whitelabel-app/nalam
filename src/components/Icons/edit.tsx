import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const Edit: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 23 22" style={style}>
        <Path
            d="M7.643 2.142a.55.55 0 110 1.101h-4.89a1.654 1.654 0 00-1.652 1.652v14.351c.002.913.74 1.651 1.653 1.653h15.452a1.654 1.654 0 001.652-1.653v-4.89a.55.55 0 111.102 0v4.89A2.757 2.757 0 0118.206 22H2.754A2.757 2.757 0 010 19.246V4.896a2.757 2.757 0 012.754-2.754zM17.237.725a2.481 2.481 0 013.505 0l.646.646a2.477 2.477 0 010 3.505L11.563 14.7a.552.552 0 01-.243.141l-4.664 1.292a.551.551 0 01-.678-.678l1.292-4.664a.553.553 0 01.141-.242zM8.093 11.948L7.3 14.813l2.866-.794-2.072-2.071zm3.112 2.332l.359.359-.36-.36zm5.447-11.413l-8.04 8.041 2.593 2.594 8.04-8.042-2.593-2.593zm3.31-1.364a1.378 1.378 0 00-1.946 0l-.585.585 2.594 2.593.584-.584a1.376 1.376 0 000-1.947z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

Edit.propTypes = {
    style: PropTypes.object,
};

Edit.defaultProps = {
    style: undefined,
};

export default Edit;
