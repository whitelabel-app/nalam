import styled from 'styled-components/native';
import { PlusCircle, Edit } from '../../../../components/Icons';
import {
    COLOR_WHITE,
    COLOR_DARK_1,
    COLOR_GRAY_3,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../../../styles/colors';

export const AddIcon = styled(PlusCircle)`
    color: ${COLOR_WHITE};
    width: 24;
    height: 24;
`;

export const Container = styled.View`
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

export const ItemContainer = styled.View`
    margin-left: 24px;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 16px 20px 0;
    border-bottom-color: ${COLOR_GRAY_TRANSPARENT_2};
    border-bottom-width: 1px;
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

export const SectionHeader = styled.View`
    width: 100%;
    padding: 4px 12px;
    background-color: #ff5555;
`;

export const Label = styled.Text`
    font-size: 14;
    font-weight: 700;
    color: ${COLOR_WHITE};
`;
