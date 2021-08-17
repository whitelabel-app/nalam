import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { getMealTimeLabel } from '../../../helpers';
import {
    DetailContainer,
    Top,
    Left,
    Date,
    Value,
    Mood,
    Right,
    Icon,
    MoodContainer,
    MoodIcon,
    ItemLabel,
    ItemValue,
    ItemContainer,
} from './styled';
import { Edit, Trash } from '../../../components/Icons';
import { useIntl } from 'react-intl';

const Details = props => {
    const {
        style,
        bloodSugar: bloodSugarProp,
        onRemove,
        onEdit,
        isCurrentLoggedUser,
    } = props;
    const intl = useIntl();
    if (!bloodSugarProp) {
        return null;
    }

    const {
        data: { mealTime, dateTime, bloodSugar },
    } = bloodSugarProp;

    return (
        <DetailContainer style={style}>
            <Top>
                <Left>
                    <Date>{`Today ${intl.formatTime(dateTime.toDate())}`}</Date>
                    <Value>{`${bloodSugar} mg/dL`}</Value>
                    <MoodContainer>
                        <MoodIcon />
                        <Mood>Normal</Mood>
                    </MoodContainer>
                </Left>
                <RenderIf isTrue={isCurrentLoggedUser}>
                    <Right>
                        <ButtonIcon
                            icon={<Icon as={Edit} />}
                            onPress={() => onEdit()}
                        />
                        <ButtonIcon
                            icon={<Icon as={Trash} />}
                            onPress={() => onRemove()}
                        />
                    </Right>
                </RenderIf>
            </Top>
            <ItemContainer>
                <ItemLabel>Meal Time</ItemLabel>
                <ItemValue>{getMealTimeLabel(mealTime)}</ItemValue>
            </ItemContainer>
        </DetailContainer>
    );
};

Details.propTypes = {
    style: PropTypes.object,
    bloodSugar: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
    isCurrentLoggedUser: PropTypes.bool,
};

Details.defaultProps = {
    style: undefined,
    bloodSugar: undefined,
    onRemove: () => {},
    onEdit: () => {},
    isCurrentLoggedUser: true,
};

export default Details;
