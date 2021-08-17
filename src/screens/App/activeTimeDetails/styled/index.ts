import styled from 'styled-components/native';
import MoodOutput from '../../../../components/MoodOutput';
import ActiveTimeProgressZones from '../../../../components/ActiveTimeProgressZones';
import {
    PlusCircle,
    Edit,
    FaceHappy,
    Heart,
} from '../../../../components/Icons';
import {
    COLOR_WHITE,
    COLOR_DARK_1,
    COLOR_GRAY_3,
    COLOR_WARNING,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../../../styles/colors';

export const SectionHeader = styled.View`
    width: 100%;
    padding: 4px 12px;
    background-color: #05b1a4;
`;

export const Label = styled.Text`
    font-size: 14;
    font-weight: 700;
    color: ${COLOR_WHITE};
`;

export const TotalContainer = styled.View`
    color: ${COLOR_WHITE};
`;

export const TotalLabel = styled.Text`
    font-size: 14;
    color: ${COLOR_WHITE};
    text-align: right;
`;

export const ContentHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 4px 16px;
    margin-bottom: 16px;
    background-color: ${COLOR_WARNING};
`;

export const ContentHeaderLabel = styled.Text`
    color: ${COLOR_WHITE};
    font-size: 14;
    font-weight: 700;
`;

export const ContentHeaderAvg = styled.Text`
    color: ${COLOR_WHITE};
    font-size: 14;
    font-weight: 500;
`;

export const AddIcon = styled(PlusCircle)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const Container = styled.View`
    padding: 16px 0;
    background-color: ${COLOR_WHITE};
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
`;

export const Top = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 12px 0 8px;
    padding-bottom: 12px;
`;

export const Left = styled.View`
    padding: 8px;
`;

export const LabelDetails = styled.Text`
    text-transform: uppercase;
    font-size: 12;
    color: ${COLOR_GRAY_3};
`;

export const MoodOutputDetails = styled(MoodOutput)`
    margin-top: 4px;
`;

export const Date = styled.Text`
    font-size: 16px;
    color: ${COLOR_DARK_1};
    font-weight: 600;
    margin-bottom: 16px;
`;

export const Value = styled.Text`
    font-size: 24px;
    color: ${COLOR_DARK_1};
    margin-bottom: 12px;
`;

export const MoodContainer = styled.View`
    flex-direction: row;
    margin-top: 8px;
`;

export const MoodIcon = styled(FaceHappy)`
    height: 18px;
    width: 18px;
    margin-right: 4px;
`;

export const Mood = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
`;

export const ExerciseZonesContainer = styled.View`
    border-top-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-top-width: 1px;
    margin: 0 0 0 16px;
    padding: 20px 30px 0 0;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    margin-bottom: 16px;
    align-items: center;
`;

export const HeaderLabel = styled.Text`
    font-size: 20px;
    color: ${COLOR_DARK_1};
    font-weight: 600;
`;

export const HeaderIcon = styled(Heart)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

export const Content = styled.View`
    margin-left: 32px;
`;

export const ActiveTimeProgressZonesTotal = styled(ActiveTimeProgressZones)`
    margin-bottom: 16px;
`;

export const DateContainer = styled.Text`
    color: ${COLOR_GRAY_3};
    flex-direction: row;
    font-size: 15;
    font-weight: 600;
    justify-content: flex-end;
`;

export const Right = styled.View`
    padding: 9px;
`;

export const Icon = styled(Edit)`
    color: ${COLOR_GRAY_3};
    width: 20px;
    height: 20px;
`;

export const ItemLabel = styled.Text`
    font-size: 16px;
    color: ${COLOR_GRAY_3};
`;

export const ItemValue = styled.Text`
    font-size: 24px;
    color: ${COLOR_DARK_1};
    font-weight: 200;
`;

export const ItemValueSmall = styled.Text`
    font-size: 18px;
    color: ${COLOR_DARK_1};
    font-weight: 200;
`;

export const ScoreCard = styled.View`
    padding: 0px 30px 20px 30px;
    flex-direction: row;
    background-color: ${COLOR_WHITE};
    border-radius: 20px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 0;
    margin-bottom: 32px;
`;
