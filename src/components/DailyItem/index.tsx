import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
    StyledContainer,
    StyledDayContainer,
    StyledContent,
    StyledRightElementContainer,
    StyledDate,
    StyledArrowRightIcon,
    StyledView,
    Day,
} from './styled';
import { Style } from '../types';
import Description from './description';
import Label from './label';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';

interface Props extends Style {
    day?: ReactNode;
    label?: ReactNode;
    description?: ReactNode;
    date?: ReactNode;
    onPress?: (event?: any) => void;
}

const Container = props => {
    const { isTouchable, children, onPress, style } = props;
    if (isTouchable) {
        return (
            <StyledContainer onPress={onPress} style={style}>
                {children}
            </StyledContainer>
        );
    }
    return <StyledView style={style}>{children}</StyledView>;
};

const CardItem: React.FC<Props> = props => {
    const { style, day, label, description, date, onPress } = props;
    const isTouchable = onPress && typeof onPress === 'function';
    const hasLabel = !!label;
    const hasDescription = !!description;
    const hasDate = !!date;
    const hasonPress = !!onPress;

    return (
        <Container isTouchable={isTouchable} onPress={onPress} style={style}>
            <StyledDayContainer>
                <Day>{day}</Day>
            </StyledDayContainer>
            <StyledContent>
                <RenderIf isTrue={hasLabel}>
                    <Label label={label} />
                </RenderIf>
                <RenderIf isTrue={hasDescription}>
                    <Description description={description} />
                </RenderIf>
            </StyledContent>
            <StyledRightElementContainer date={date} onPress={onPress}>
                <RenderIf isTrue={hasDate}>
                    <StyledDate>{date}</StyledDate>
                </RenderIf>
                <RenderIf isTrue={hasonPress}>
                    <StyledArrowRightIcon />
                </RenderIf>
            </StyledRightElementContainer>
        </Container>
    );
};

CardItem.propTypes = {
    onPress: PropTypes.func,
    date: PropTypes.node,
    day: PropTypes.node,
    label: PropTypes.node,
    description: PropTypes.node,
    style: PropTypes.object,
};

CardItem.defaultProps = {
    onPress: undefined,
    date: undefined,
    day: undefined,
    label: undefined,
    description: undefined,
    style: undefined,
};

export default CardItem;
