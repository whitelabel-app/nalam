import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ButtonIcon } from 'react-native-rainbow';
import MoodOutput from '../../../components/MoodOutput';
import { Edit, Trash } from '../../../components/Icons';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import {
    Container,
    Top,
    Left,
    Date,
    Value,
    Right,
    Icon,
    ItemContainer,
    ItemLabel,
    ItemValue,
} from './styled';
import useUserProfile from '../../../redux/services/hooks/useUserProfile';
import { getBMI, getWeightMood } from '../../../helpers';

const Details = props => {
    const { style, weight, onRemove, onEdit, isCurrentLoggedUser, uid } = props;
    const intl = useIntl();
    const userProfile = useUserProfile(uid);

    if (!weight) {
        return null;
    }

    const { value, dateTime } = weight;
    const height = userProfile?.user?.height;
    const weightMood = getWeightMood(height, weight?.value);

    const bmi = getBMI(value, height);
    return (
        <Container style={style}>
            <Top>
                <Left>
                    <Date>{`${intl.formatTime(dateTime.toDate())}`}</Date>
                    <Value>{`${value} lbs`}</Value>
                    <MoodOutput size="medium" label={weightMood} />
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
                <ItemLabel>BMI</ItemLabel>
                <ItemValue>{`${bmi} %`}</ItemValue>
            </ItemContainer>
        </Container>
    );
};

Details.propTypes = {
    style: PropTypes.object,
    weight: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
    isCurrentLoggedUser: PropTypes.bool,
    uid: PropTypes.string.isRequired,
};

Details.defaultProps = {
    style: undefined,
    weight: undefined,
    onRemove: () => {},
    onEdit: () => {},
    isCurrentLoggedUser: true,
    uid: undefined,
};

export default Details;
