import styled from 'styled-components/native';
import ListItem from '../../../../components/ListItem';
import { ChevronRight, FaceHappy, Shoe } from '../../../../components/Icons';
import ArrowLeft from 'react-native-rainbow/dist/components/Icons/arrowLeft';
import { ButtonIcon } from 'react-native-rainbow';
import ActivityScore from '../../../../components/ActivityScore';
import {
    COLOR_WHITE,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_GRAY_3,
    COLOR_GRAY_2,
    COLOR_BRAND,
} from '../../../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_WHITE};
`;

export const TopContent = styled.ImageBackground`
    height: 240px;
    width: 100%;
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
    box-shadow: 0 0 2px ${COLOR_GRAY_TRANSPARENT_2};
`;

export const Gradient = styled.View`
    height: 100%;
    width: 100%;
    background-color: rgba(44, 45, 59, 0.4);
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
    justify-content: space-between;
`;

export const Header = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 4px 0 4px;
`;

export const RightContent = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const HeaderButton = styled(ButtonIcon)`
    margin: 0 4px;
`;

export const HeaderIcon = styled(ArrowLeft)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const Title = styled.Text`
    font-size: 24;
    color: ${COLOR_WHITE};
    letter-spacing: 0.5;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: ${COLOR_WHITE};
    margin: 16px;
    text-align: center;
    font-weight: 600;
`;

export const MembersTitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 24;
    padding-right: 24;
`;

export const MembersTitle = styled.Text`
    color: ${COLOR_GRAY_3};
    font-size: 16px;
    text-align: center;
    margin-top: 24px;
`;

export const MemberItem = styled(ListItem)`
    margin-left: 20px;
    padding-left: 0;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
    height: 20px;
    width: 20px;
    color: ${COLOR_GRAY_2};
`;

export const ItemDescriptionContainer = styled.View`
    flex-direction: row;
    margin-top: 4px;
    align-items: center;
`;

export const ItemDescription = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
    margin-left: 4px;
`;

export const ItemDescriptionIcon = styled(FaceHappy)`
    width: 16px;
    height: 16px;
`;

export const ModalContainer = styled.View`
    background-color: white;
    margin: 0 16px 16px 16px;
    justify-content: space-between;
    border-radius: 30;
`;

export const OptionContainer = styled.TouchableOpacity`
    padding: 20px;
    width: 100%;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
    align-items: center;
    justify-content: center;
`;

export const OptionText = styled.Text`
    font-size: 18px;
    width: 100%;
    text-align: center;
    color: ${COLOR_BRAND};
`;

export const SwitchLabel = styled.Text`
    color: ${COLOR_BRAND};
    font-size: 16px;
    text-align: center;
    margin-top: 24px;
`;

export const MemberScoresContainer = styled.View`
    flex-direction: row;
    margin-top: 12px;
    justify-content: space-around;
`;

export const ActivityScoreContainer = styled(ActivityScore)`
    margin-right: 20px;
`;

export const ScoreActivityIcon = styled(Shoe)`
    width: 20px;
    height: 20px;
`;
