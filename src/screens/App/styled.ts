import styled from 'styled-components/native';
import {
    DashboardBorder,
    DashboardFilled,
    CommunityBorder,
    CommunityFilled,
    UserBorder,
    UserFilled,
    Fitbit,
    ChevronRight,
} from '../../components/Icons';
import CardListItem from '../../components/CardListItem';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import {
    BACKGROUND_COLOR_1,
    COLOR_DARK_1,
    COLOR_GRAY_3,
    COLOR_BRAND,
} from '../../styles/colors';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${BACKGROUND_COLOR_1};
    padding: 0 16px;
`;

export const HeaderContainer = styled.SafeAreaView`
    width: 100%;
    align-items: center;
    margin-bottom: 32px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px 0 8px;
    width: 100%;
`;

export const Skip = styled.Text`
    font-size: 16;
    color: ${COLOR_DARK_1};
    font-weight: 400;
    letter-spacing: 1.2;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
    color: ${COLOR_GRAY_3};
    width: 24;
    height: 24;
`;

export const Title = styled.Text`
    font-size: 24;
    color: ${COLOR_BRAND};
    letter-spacing: 0.5;
    margin-bottom: 24px;
`;

export const CardDeviceItem = styled(CardListItem)`
    margin: 0 16px;
`;

export const StyledDashboardBorder = styled(DashboardBorder)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_3};
`;

export const StyledDashboardFilled = styled(DashboardFilled)`
    height: 28px;
    width: 28px;
`;

export const StyledCommunityBorder = styled(CommunityBorder)`
    height: 30px;
    width: 30px;
    color: ${COLOR_GRAY_3};
`;

export const StyledCommunityFilled = styled(CommunityFilled)`
    height: 36px;
    width: 36px;
`;

export const StyledUserBorder = styled(UserBorder)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_3};
`;

export const StyledUserFilled = styled(UserFilled)`
    height: 28px;
    width: 28px;
`;

export const DeviceLogoIcon = styled(Fitbit)`
    height: 40px;
    width: 40px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_3};
`;
