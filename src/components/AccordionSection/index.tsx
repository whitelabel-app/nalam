import React, { useState } from 'react';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import ChevronRight from '../Icons/chevronRight';
import ChevronDown from '../Icons/chevronDown';
import { InnerContainer, RightContainer, Label, Container } from './styled';
import { COLOR_BRAND } from '../../styles/colors';

const iconStyles = {
    marginLeft: 20,
    height: 20,
    width: 20,
    color: COLOR_BRAND,
};

export default function AccordionSection(props) {
    const {
        label,
        children,
        rightContent,
        style,
        readOnly,
        onPress = () => {},
        isExpanded: isExpandedProp,
    } = props;
    const [isExpandedState, setExpanded] = useState(false);
    const isExpanded =
        typeof isExpandedProp === 'boolean' ? isExpandedProp : isExpandedState;
    const Icon = isExpanded ? ChevronDown : ChevronRight;
    const content = isExpanded ? children : null;
    const hasLabel = !!label;
    const hasRightContent = !!rightContent;

    const handlePress = () => {
        if (!readOnly) {
            setExpanded(!isExpanded);
            onPress();
        }
    };

    return (
        <Container style={style}>
            <InnerContainer onPress={handlePress}>
                <RenderIf isTrue={hasLabel}>
                    <Label>{label}</Label>
                </RenderIf>
                <RightContainer paddingRightVariant={readOnly}>
                    <RenderIf isTrue={hasRightContent}>{rightContent}</RenderIf>
                    <RenderIf isTrue={!readOnly}>
                        <Icon style={iconStyles} />
                    </RenderIf>
                </RightContainer>
            </InnerContainer>
            {content}
        </Container>
    );
}
