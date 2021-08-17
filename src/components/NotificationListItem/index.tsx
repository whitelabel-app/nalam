import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
    StyledContainer,
    StyledView,
    StyledContentContainer,
    StyledContent,
    StyledDate,
    StyledIcon,
    StyledInfo,
    StyledLoadingContainer,
    StyledMainLoadingBar,
    StyledSecondaryLoadingBar,
    StyledLoadingCircle,
    ChevronRightIcon,
    StyledDescription,
} from './styled';
import { Style } from '../types';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';

interface Props extends Style {
    icon?: ReactNode;
    isRead?: boolean;
    content?: ReactNode;
    description?: ReactNode;
    date?: ReactNode;
    actions?: ReactNode;
    onPress?: (event?: any) => void;
    isLoading?: boolean;
}

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

function RightElement({ isNotRead, isTouchable }) {
    if (isNotRead) {
        return <StyledIcon />;
    }
    if (isTouchable) {
        return <ChevronRightIcon />;
    }
    return null;
}

const NotificationListItem: React.FC<Props> = props => {
    const {
        style,
        icon,
        actions,
        content,
        date,
        isRead,
        isLoading,
        onPress,
        description,
    } = props;
    const isNotRead = !isRead;
    const isTouchable = typeof onPress === 'function';

    if (isLoading) {
        return (
            <StyledContainer style={style}>
                <StyledLoadingCircle />
                <StyledLoadingContainer>
                    <StyledMainLoadingBar />
                    <StyledSecondaryLoadingBar />
                </StyledLoadingContainer>
            </StyledContainer>
        );
    }

    return (
        <Container isTouchable={isTouchable} onPress={onPress} style={style}>
            {icon}
            <StyledContentContainer icon={icon} actions={actions}>
                <StyledInfo>
                    <StyledContent isNotRead={isNotRead}>
                        {content}
                    </StyledContent>
                    <RenderIf isTrue={!!description}>
                        <StyledDescription>{description}</StyledDescription>
                    </RenderIf>
                    <StyledDate>{date}</StyledDate>
                    {actions}
                </StyledInfo>
                <RightElement isNotRead={isNotRead} isTouchable={isTouchable} />
            </StyledContentContainer>
        </Container>
    );
};

NotificationListItem.propTypes = {
    icon: PropTypes.node,
    isRead: PropTypes.bool,
    content: PropTypes.node,
    description: PropTypes.node,
    date: PropTypes.node,
    actions: PropTypes.node,
    style: PropTypes.object,
    isLoading: PropTypes.bool,
    onPress: PropTypes.func,
};

NotificationListItem.defaultProps = {
    icon: undefined,
    content: undefined,
    description: undefined,
    date: undefined,
    actions: undefined,
    style: undefined,
    isRead: false,
    isLoading: false,
    onPress: undefined,
};

export default NotificationListItem;
