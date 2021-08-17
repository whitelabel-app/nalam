import styled from 'styled-components/native';
import {
    Family,
    Runner,
    ChevronRight,
    BellBorder,
    Plus,
} from '../../../../components/Icons';
import CardListItem from '../../../../components/CardListItem';
import NotificationButton from '../../../../components/NotificationButton';
import {
    COLOR_WHITE,
    COLOR_GRAY_3,
    COLOR_BRAND,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_GRAY_TRANSPARENT_1,
    COLOR_GRAY_2,
    COLOR_DARK_1,
    BACKGROUND_COLOR_1,
} from '../../../../styles/colors';

export const Container = styled.View`
    background-color: ${BACKGROUND_COLOR_1};
    flex: 1;
`;

export const TopContent = styled.SafeAreaView`
    background-color: ${COLOR_WHITE};
    margin-bottom: 2px;
    box-shadow: 0 0 1px ${COLOR_GRAY_TRANSPARENT_2};
`;

export const TopBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
`;

export const Header = styled.Text`
    font-size: 24px;
    color: ${COLOR_DARK_1};
    letter-spacing: 0.75;
`;

export const Notification = styled(NotificationButton)`
    margin-left: 12px;
    align-self: center;
`;

export const UserSelector = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const HeaderIcon = styled(BellBorder)`
    height: 28px;
    width: 28px;
    color: ${COLOR_GRAY_3};
`;

export const GreenHeaderIcon = styled(Plus)`
    height: 24px;
    width: 24px;
    color: ${COLOR_BRAND};
`;

export const CardItem = styled(CardListItem)`
    margin: 0 16px 8px 16px;
    padding: 12px;
`;

export const CardItemIconContainer = styled.View`
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR_GRAY_TRANSPARENT_1};
    border-radius: 48px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_2};
`;

export const CardItemIcon = styled(Runner)`
    height: 26px;
    width: 26px;
`;

export const SectionHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 16px 16px 16px;
`;

export const Title = styled.Text`
    color: ${COLOR_DARK_1};
    letter-spacing: 0.25px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const FamilyIcon = styled(Family)`
    height: 100%;
    width: 100%;
`;
