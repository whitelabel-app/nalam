import React from 'react';
import PropTypes from 'prop-types';
import { StyledDescription } from './styled';

interface Props {
    description?: any;
}

const Description: React.FC<Props> = props => {
    const { description } = props;
    if (typeof description === 'string' || typeof description === 'number') {
        return <StyledDescription>{description}</StyledDescription>;
    }
    return description;
};

Description.propTypes = {
    description: PropTypes.node,
};

Description.defaultProps = {
    description: null,
};

export default Description;
