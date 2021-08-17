import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ButtonIcon } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import {
    Container,
    Top,
    Left,
    Date,
    Value,
    Right,
    Icon,
    ItemLabel,
    ItemValue,
    ItemContainer,
    ItemValueSmall,
} from './styled';
import { Edit, Trash } from '../../../components/Icons';
import MoodOutput from '../../../components/MoodOutput';

const Details = props => {
    const {
        style,
        bloodPressure,
        onRemove,
        onEdit,
        isCurrentLoggedUser,
    } = props;
    const intl = useIntl();
    if (!bloodPressure) {
        return null;
    }

    const {
        data: { heartRate, sys, dateTime, dia },
    } = bloodPressure;
    return (
        <Container style={style}>
            <Top>
                <Left>
                    <Date>{`Today ${intl.formatTime(dateTime.toDate())}`}</Date>
                    <Value>{`${sys}/${dia}`}</Value>
                    <MoodOutput size="medium" label="Normal" />
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
                <ItemLabel>Systolic (mmHg)</ItemLabel>
                <ItemValue>{sys}</ItemValue>
            </ItemContainer>
            <ItemContainer>
                <ItemLabel>Diastolic (mmHg)</ItemLabel>
                <ItemValue>{dia}</ItemValue>
            </ItemContainer>
            <RenderIf isTrue={heartRate}>
                <ItemContainer>
                    <ItemLabel>Heart Rate</ItemLabel>
                    <ItemValueSmall>{`${heartRate} bmp`}</ItemValueSmall>
                </ItemContainer>
            </RenderIf>
        </Container>
    );
};

Details.propTypes = {
    style: PropTypes.object,
    bloodPressure: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
    isCurrentLoggedUser: PropTypes.bool,
};

Details.defaultProps = {
    style: undefined,
    bloodPressure: undefined,
    onRemove: () => {},
    onEdit: () => {},
    isCurrentLoggedUser: true,
};

export default Details;
