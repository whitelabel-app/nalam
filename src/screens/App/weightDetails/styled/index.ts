import styled from 'styled-components/native';
import { Edit } from '../../../../components/Icons';
import {
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_DARK_1,
    COLOR_GRAY_3,
} from '../../../../styles/colors';
import PlusCircle from '../../../../components/Icons/plusCircle';

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
    background-color: ${COLOR_BRAND};
`;

export const ContentHeaderLabel = styled.Text`
    color: ${COLOR_WHITE};
    font-size: 14;
    font-weight: 700;
`;

export const Container = styled.View`
    width: 100%;
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
    padding: 8px 8px 8px 0;
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
