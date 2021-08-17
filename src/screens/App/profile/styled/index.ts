import styled from 'styled-components/native';
import { Avatar } from 'react-native-rainbow';
import {
    Phone,
    Edit,
    ChevronRight,
    DevicesGroup,
} from '../../../../components/Icons';
import {
    BACKGROUND_COLOR_1,
    COLOR_GRAY_TRANSPARENT_3,
    COLOR_WHITE,
    COLOR_DARK_1,
    COLOR_GRAY_3,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_ERROR_ACTIVE,
    COLOR_GRAY_2,
    COLOR_BRAND,
} from '../../../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${BACKGROUND_COLOR_1};
    justify-content: space-between;
`;

export const TopContent = styled.View`
    background-color: ${COLOR_WHITE};
    width: 100%;
    align-items: center;
    box-shadow: 0 0 1px ${COLOR_GRAY_TRANSPARENT_3};
    margin-bottom: 2px;
`;

export const Background = styled.ImageBackground`
    height: 150px;
    width: 100%;
`;

export const Gradient = styled.View`
    height: 100%;
    width: 100%;
    background-color: rgba(44, 45, 59, 0.4);
`;

export const TopBar = styled.SafeAreaView`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const TopBarIcon = styled(Edit)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const UserAvatar = styled(Avatar)`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 4px solid ${COLOR_WHITE};
    margin-top: -50px;
`;

export const Title = styled.Text`
    font-size: 24;
    font-weight: 300;
    letter-spacing: 1;
    text-align: center;
    color: ${COLOR_DARK_1};
    margin-top: 8px;
`;

export const DescriptionContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 8px 0 24px 0;
`;

export const Description = styled.Text`
    font-size: 16;
    font-weight: 300;
    letter-spacing: 1;
    text-align: center;
    color: ${COLOR_GRAY_3};
`;

export const PhoneIcon = styled(Phone)`
    width: 16px;
    height: 20px;
    color: ${COLOR_GRAY_3};
    margin-right: 8px;
`;

export const ListContainer = styled.View`
    background-color: ${COLOR_WHITE};
    border: 1px solid ${COLOR_GRAY_TRANSPARENT_2};
    margin: 24px 0 0 0;
`;

export const LogoutItem = styled.View`
    background-color: ${COLOR_WHITE};
    border: 1px solid ${COLOR_GRAY_TRANSPARENT_2};
    margin: 24px 0 24px 0;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_2};
`;

export const Divider = styled.View`
    height: 1px;
    background-color: ${COLOR_GRAY_TRANSPARENT_2};
    margin-left: 12px;
    width: 100%;
`;

export const IconContainer = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${COLOR_BRAND};
    align-items: center;
    justify-content: center;
`;

export const ListIcon = styled(DevicesGroup)`
    width: 28px;
    height: 28px;
`;

export const LogoutText = styled.Text`
    text-align: center;
    color: ${COLOR_ERROR_ACTIVE};
    font-size: 16px;
    margin: 20px 0;
    letter-spacing: 0.5;
`;

export const StyledDescription = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
    margin-top: 4px;
    letter-spacing: 0.5;
    margin-right: 48px;
`;
