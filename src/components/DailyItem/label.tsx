import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styled';

interface Props {
    label?: any;
}

const Label: React.FC<Props> = props => {
    const { label } = props;
    if (typeof label === 'string' || typeof label === 'number') {
        return <StyledLabel>{label}</StyledLabel>;
    }
    return label;
};

Label.propTypes = {
    label: PropTypes.node,
};

Label.defaultProps = {
    label: null,
};

export default Label;
