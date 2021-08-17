import styled from 'styled-components/native';
import {
    COLOR_WHITE,
    COLOR_DARK_1,
    COLOR_GRAY_3,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../../../styles/colors';
import PlusCircle from '../../../../components/Icons/plusCircle';
import { FaceHappy, Edit } from '../../../../components/Icons';

export const AddIcon = styled(PlusCircle)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const ContentHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 4px 16px;
    margin-bottom: 16px;
    background-color: #ff5555;
`;

export const ContentHeaderLabel = styled.Text`
    color: ${COLOR_WHITE};
    font-size: 14;
    font-weight: 700;
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

export const DetailContainer = styled.View`
    padding: 12px 0 20px 0;
    background-color: ${COLOR_WHITE};
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
`;

export const Top = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
    margin-left: 24px;
    padding-bottom: 12px;
`;

export const Left = styled.View`
    padding: 8px;
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

export const Right = styled.View`
    padding: 0 8px;
    flex-direction: row;
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

export const ItemContainer = styled.View`
    margin-left: 24px;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 16px 20px 0;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
`;
