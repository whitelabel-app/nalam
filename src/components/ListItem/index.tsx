import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
    StyledContainer,
    StyledView,
    StyledContent,
    StyledContentContainer,
    StyledLabel,
    StyledDescription,
} from './styled';
import { Style } from '../types';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';

interface Props extends Style {
    icon?: ReactNode;
    action?: ReactNode;
    label?: ReactNode;
    description?: ReactNode;
    onPress?: (event?: any) => void;
}

const DescriptionContent = props => {
    const { children } = props;
    if (typeof children === 'string' || typeof children === 'number') {
        return (
            <StyledDescription numberOfLines={1}>{children}</StyledDescription>
        );
    }
    return children;
};

const Container = props => {
    const { isTouchable, children, onPress, style } = props;
    if (isTouchable) {
        return (
            <StyledContainer onPress={onPress} style={style}>
                {children}
            </StyledContainer>
        );
    }
    return <StyledView style={style}>{children}</StyledView>;
};

const ListItem: React.FC<Props> = props => {
    const { style, icon, action, label, description, onPress } = props;
    const hasDescription = !!description;
    const isTouchable = onPress && typeof onPress === 'function';

    return (
        <Container isTouchable={isTouchable} onPress={onPress} style={style}>
            <StyledContentContainer>
                {icon}
                <StyledContent icon={icon}>
                    <StyledLabel>{label}</StyledLabel>
                    <RenderIf isTrue={hasDescription}>
                        <DescriptionContent>{description}</DescriptionContent>
                    </RenderIf>
                </StyledContent>
            </StyledContentContainer>
            {action}
        </Container>
    );
};

ListItem.propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.node,
    label: PropTypes.node,
    description: PropTypes.node,
    action: PropTypes.node,
    style: PropTypes.object,
};

ListItem.defaultProps = {
    onPress: undefined,
    icon: undefined,
    label: undefined,
    description: undefined,
    action: undefined,
    style: undefined,
};

export default ListItem;
