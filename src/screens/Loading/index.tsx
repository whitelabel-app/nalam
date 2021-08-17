import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { Title, Container, Description } from './styled';
import { COLOR_BRAND } from '../../styles/colors';

export default function Loading({ transparent, title, description }) {
    return (
        <Container transparent={transparent}>
            <ActivityIndicator size="large" color={COLOR_BRAND} />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
}

Loading.propTypes = {
    transparent: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

Loading.defaultProps = {
    transparent: false,
    title: '',
    description: '',
};
