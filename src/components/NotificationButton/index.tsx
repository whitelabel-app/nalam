import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import {
    StyledContainer,
    StyledBadgeContainer,
    Badge,
    StyledBellIcon,
} from './styled';
import { Style } from '../types';

interface Props extends Style {
    onPress?: (event?: any) => void;
    unreadAmount?: number;
}

const NotificationButton: React.FC<Props> = props => {
    const { style, onPress, unreadAmount = 0 } = props;
    const showBadge = unreadAmount > 0;
    const unread = unreadAmount > 9 ? '9+' : unreadAmount;

    return (
        <ButtonIcon
            onPress={onPress}
            style={style}
            icon={
                <StyledContainer>
                    <StyledBellIcon />
                    <RenderIf isTrue={showBadge}>
                        <StyledBadgeContainer>
                            <Badge>{unread}</Badge>
                        </StyledBadgeContainer>
                    </RenderIf>
                </StyledContainer>
            }
        />
    );
};

NotificationButton.propTypes = {
    onPress: PropTypes.func,
    unreadAmount: PropTypes.number,
    style: PropTypes.object,
};

NotificationButton.defaultProps = {
    onPress: undefined,
    unreadAmount: 0,
    style: undefined,
};

export default NotificationButton;
