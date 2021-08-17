import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { Style } from '../types';

const Trash: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 17 22" style={style}>
        <Path
            d="M12.27 2.962v-.847c0-.934-.758-1.692-1.693-1.692h-4.23c-.93.011-1.682.763-1.693 1.692v.847H.424v.846h.845l.855 16.107a1.803 1.803 0 001.773 1.662h9.13a1.803 1.803 0 001.772-1.662l.855-16.107h.846v-.846h-4.23zm-1.693-1.693c.467 0 .846.38.846.846v.847H5.5v-.847c0-.467.379-.846.846-.846h4.23zm3.38 18.59a.96.96 0 01-.93.872h-9.13a.96.96 0 01-.931-.872l-.85-16.051h12.692l-.85 16.051zm-5.072-.82V5.5h-.847v13.538h.847zm-2.539 0L5.5 5.5h-.846L5.5 19.038h.846zM12.265 5.5h-.863l-.825 13.538h.846L12.265 5.5z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

Trash.propTypes = {
    style: PropTypes.object,
};

Trash.defaultProps = {
    style: undefined,
};

export default Trash;
