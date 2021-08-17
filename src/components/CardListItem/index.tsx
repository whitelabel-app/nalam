import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
    StyledCard,
    StyledLeftContent,
    StyledLeftContainer,
    StyledLabel,
    StyledDescription,
} from './styled';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { Style } from '../types';

interface Props extends Style {
    icon?: ReactNode;
    action?: ReactNode;
    label?: ReactNode;
    description?: ReactNode;
    onPress?: (event?: any) => void;
}

const CardListItem: React.FC<Props> = props => {
    const { style, icon, action, label, description, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <StyledCard style={style}>
                <StyledLeftContainer>
                    {icon}
                    <StyledLeftContent icon={icon}>
                        <StyledLabel>{label}</StyledLabel>
                        <RenderIf isTrue={!!description}>
                            <StyledDescription>{description}</StyledDescription>
                        </RenderIf>
                    </StyledLeftContent>
                </StyledLeftContainer>
                {action}
            </StyledCard>
        </TouchableOpacity>
    );
};

CardListItem.propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.node,
    label: PropTypes.node,
    description: PropTypes.node,
    action: PropTypes.node,
    style: PropTypes.object,
};

CardListItem.defaultProps = {
    onPress: () => {},
    icon: undefined,
    label: undefined,
    description: undefined,
    action: undefined,
    style: undefined,
};

export default CardListItem;
