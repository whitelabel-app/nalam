import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
    StyledCard,
    StyledIconContainer,
    StyledLabel,
    StyledValue,
} from './styled';
import { Style } from '../types';

interface Props extends Style {
    icon?: ReactNode;
    label?: ReactNode;
    value?: ReactNode;
    onPress?: (event?: any) => void;
}

const CardItem: React.FC<Props> = props => {
    const { style, icon, label, value, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <StyledCard>
                <StyledLabel>{label}</StyledLabel>
                <StyledIconContainer>{icon}</StyledIconContainer>
                <StyledValue>{value}</StyledValue>
            </StyledCard>
        </TouchableOpacity>
    );
};

CardItem.propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.node,
    label: PropTypes.node,
    value: PropTypes.node,
    style: PropTypes.object,
};

CardItem.defaultProps = {
    onPress: () => {},
    icon: undefined,
    label: undefined,
    value: undefined,
    style: undefined,
};

export default CardItem;
