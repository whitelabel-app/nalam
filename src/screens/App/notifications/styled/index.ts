import styled from 'styled-components/native';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import { Button, ButtonIcon } from 'react-native-rainbow';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_DARK_1,
    COLOR_BRAND,
    COLOR_GRAY_TRANSPARENT_3,
    COLOR_ERROR,
    COLOR_SUCCESS,
} from '../../../../styles/colors';
import {
    Moon,
    CheckmarkCircle,
    CloseCircle,
    EmptyNotification,
    Calendar,
} from '../../../../components/Icons';
import NotificationListItem from '../../../../components/NotificationListItem';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_WHITE};
    width: 100%;
`;

export const Header = styled.SafeAreaView`
    height: 120px;
    box-shadow: 0 0 1px ${COLOR_GRAY_TRANSPARENT_3};
    background-color: ${COLOR_WHITE};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BackButton = styled(ButtonIcon)`
    margin-left: 8px;
`;

export const HeaderIcon = styled(ArrowLeft)`
    color: ${COLOR_GRAY_3};
    width: 24;
    height: 24;
`;

export const CalendarIcon = styled(Calendar)`
    width: 44;
    height: 44;
`;
export const Title = styled.Text`
    font-size: 24;
    color: ${COLOR_DARK_1};
    letter-spacing: 0.5;
    margin: 0 30px 0 30px;
    text-align: center;
    align-self: center;
`;

export const RightElement = styled.Text`
    font-size: 16px;
    margin-right: 12px;
    color: ${COLOR_WHITE};
`;

export const LinkContainer = styled.TouchableOpacity`
    margin: 0 8px;
`;

export const Link = styled.Text`
    font-size: 16;
    color: ${COLOR_BRAND};
    letter-spacing: 0.5;
`;

export const MembersTitle = styled.Text`
    color: ${COLOR_GRAY_3};
    font-size: 16px;
    text-align: center;
    margin-top: 24px;
`;

export const NotificationItemIcon = styled(Moon)`
    width: 48px;
    height: 48px;
`;

export const ActionsContainer = styled.View`
    flex-direction: row;
`;

export const ButtonActions = styled(Button)`
    height: 36px;
    margin-right: 12px;
`;
export const BadgeContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BadgeText = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
`;

export const BadgeDoneIcon = styled(CheckmarkCircle)`
    color: ${COLOR_SUCCESS};
    width: 16px;
    height: 16px;
    margin-right: 8px;
`;

export const BadgeCancelIcon = styled(CloseCircle)`
    color: ${COLOR_ERROR};
    width: 16px;
    height: 16px;
    margin-right: 8px;
`;

export const NotificationIcon = styled(EmptyNotification)`
    width: 84px;
    height: 84px;
    margin-bottom: 12px;
`;

export const Notification = styled(NotificationListItem)``;

export const EmptyMessageContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const MessageTitle = styled.Text`
    font-size: 24px;
    color: ${COLOR_DARK_1};
`;

export const MessageDescription = styled.Text`
    font-size: 18px;
    color: ${COLOR_GRAY_3};
    margin-top: 8px;
`;
