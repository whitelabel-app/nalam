import React from 'react';
import { TimeValue, TimeContainer } from './styled';
import { getFormattedMinutes } from '../../helpers';
import PropTypes from 'prop-types';

const FormattedMinutes = props => {
    const { minutes, style, size } = props;
    const formattedMinutes = getFormattedMinutes(minutes);
    return (
        <TimeContainer style={style} size={size}>
            <TimeValue size={size}>{formattedMinutes.hours}</TimeValue>hr{' '}
            <TimeValue size={size}>{formattedMinutes.minutes}</TimeValue>min
        </TimeContainer>
    );
};

FormattedMinutes.propTypes = {
    style: PropTypes.object,
    minutes: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

FormattedMinutes.defaultProps = {
    style: undefined,
    minutes: 0,
    size: 'small',
};

export default FormattedMinutes;
