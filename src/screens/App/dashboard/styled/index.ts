import styled from 'styled-components/native';
import {
    Family,
    BellBorder,
    Moon,
    ChevronDown,
    ChevronRight,
    Close,
    CalendarBorder,
    Checkmark,
} from '../../../../components/Icons';
import CardListItem from '../../../../components/CardListItem';
import ListItem from '../../../../components/ListItem';
import NotificationButton from '../../../../components/NotificationButton';
import { Avatar, ButtonIcon } from 'react-native-rainbow';
import {
    BACKGROUND_COLOR_1,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_WHITE,
    COLOR_DARK_1,
    COLOR_BRAND,
    COLOR_GRAY_3,
    COLOR_GRAY_2,
} from '../../../../styles/colors';

export const Container = styled.View`
    background-color: ${BACKGROUND_COLOR_1};
    flex: 1;
`;

export const TopContent = styled.SafeAreaView`
    background-color: ${COLOR_WHITE};
    border-bottom-color: rgba(0, 0, 0, 0.03);
    border-bottom-width: 1px;
`;

export const TopBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    flex-shrink: 1;
`;

export const RightElement = styled.View`
    flex-direction: row;
    margin-right: 12px;
`;

export const CalendarButton = styled(ButtonIcon)`
    margin: 0 8px 0 0;
`;

export const CalendarBorderIcon = styled(CalendarBorder)`
    color: ${COLOR_GRAY_3};
    width: 24px;
    height: 24px;
`;
export const UserSelector = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    flex-shrink: 1;
    margin-right: 16px;
`;

export const UserAvatar = styled(Avatar)`
    border: 2px solid #dde1e5;
    margin-left: 8px;
`;

export const HeaderContainer = styled.View`
    margin: 0 16px 0 8px;
    flex-shrink: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserText = styled.Text`
    font-size: 22;
    color: ${COLOR_DARK_1};
    margin-right: 8px;
`;

export const DescriptionText = styled.Text`
    font-size: 13px;
    color: ${COLOR_GRAY_3};
    margin-top: 2px;
`;

export const ChevronDownIcon = styled(ChevronDown)`
    width: 12px;
    height: 8px;
    color: ${COLOR_DARK_1};
    margin-top: 4px;
`;

export const Notification = styled(NotificationButton)`
    margin-left: 12px;
    align-self: center;
`;

export const BellIcon = styled(BellBorder)`
    height: 28px;
    width: 28px;
    color: ${COLOR_GRAY_3};
`;

export const CardItem = styled(CardListItem)`
    margin: 0 16px 8px 16px;
    padding: 12px;
`;

export const MemberItem = styled(ListItem)`
    margin: 0 0 8px 16px;
    padding: 12px;
`;

export const CardItemIconContainer = styled.View`
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: center;
    background-color: #f5f6fa;
    border-radius: 48px;
`;

export const CardItemIcon = styled(Moon)`
    height: 26px;
    width: 26px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_2};
`;

export const ModalContainer = styled.SafeAreaView`
    margin-top: 74px;
    width: 100%;
    flex-grow: 1;
`;

export const GreenChevronRightIcon = styled(ChevronRightIcon)`
    color: ${COLOR_BRAND};
`;

export const SectionHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
`;

export const Title = styled.Text`
    color: ${COLOR_DARK_1};
    letter-spacing: 0.25px;
    font-size: 16px;
    font-weight: 600;
`;

export const FamilyIcon = styled(Family)`
    height: 100%;
    width: 100%;
`;

export const CloseButton = styled(ButtonIcon)`
    position: absolute;
    top: 12;
    right: 12;
`;

export const StyledCloseIcon = styled(Close)`
    color: ${COLOR_GRAY_3};
    height: 16;
    width: 16;
`;

export const ModalContainerSelect = styled.View`
    background-color: white;
    margin: 0 16px 16px 16px;
    justify-content: space-between;
    border-radius: 30;
`;

export const OptionContainer = styled.TouchableOpacity`
    padding: 24px;
    width: 100%;
    flex-direction: row;
    border-top-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-top-width: 1px;
    align-items: center;
    position: relative;
`;

export const Option = styled.Text`
    font-size: 18px;
    width: 100%;
    color: ${COLOR_GRAY_3};
    text-transform: uppercase;
    margin-left: 12px;
`;

export const OptionIcon = styled(CalendarBorder)`
    width: 20;
    height: 20;
    color: ${COLOR_BRAND};
`;

export const OptionLabel = styled.Text`
    font-size: 18px;
    width: 100%;
    text-align: center;
    color: ${COLOR_BRAND};
    padding: 24px 12px 20px 12px;
    text-transform: uppercase;
`;

export const CheckmarkIcon = styled(Checkmark)`
    width: 16px;
    height: 16px;
    color: ${COLOR_BRAND};
    position: absolute;
    right: 20;
`;
