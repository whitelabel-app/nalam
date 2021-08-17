import React, { ReactNode } from 'react';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import PropTypes from 'prop-types';
import { Style } from '../types';
import {
    Container,
    Header,
    TopHeader,
    BackButton,
    ArrowLeftIcon,
    Title,
    TopHeaderRightContainer,
    HeaderBodyContainer,
} from './styled';

interface Props extends Style {
    onBack?: (event?: any) => void;
    topHeaderTitle?: string;
    topHeaderRightContent?: ReactNode;
    headerBody?: ReactNode;
    headerColor?: string;
    isCenter?: boolean;
}

const ActivityPageDetails: React.FC<Props> = props => {
    const {
        onBack,
        topHeaderTitle,
        topHeaderRightContent,
        headerBody,
        children,
        headerColor,
        isCenter,
    } = props;

    return (
        <Container>
            <Header color={headerColor}>
                <TopHeader>
                    <BackButton icon={<ArrowLeftIcon />} onPress={onBack} />
                    <Title isCenter={isCenter}>{topHeaderTitle}</Title>
                    <TopHeaderRightContainer>
                        <RenderIf isTrue={!!topHeaderRightContent}>
                            {topHeaderRightContent}
                        </RenderIf>
                    </TopHeaderRightContainer>
                </TopHeader>
                <RenderIf isTrue={!!headerBody}>
                    <HeaderBodyContainer>{headerBody}</HeaderBodyContainer>
                </RenderIf>
            </Header>
            {children}
        </Container>
    );
};

ActivityPageDetails.propTypes = {
    onBack: PropTypes.func,
    topHeaderTitle: PropTypes.string,
    topHeaderRightContent: PropTypes.node,
    headerBody: PropTypes.node,
    headerColor: PropTypes.string,
};

ActivityPageDetails.defaultProps = {
    onBack: () => {},
    topHeaderTitle: undefined,
    topHeaderRightContent: undefined,
    headerBody: undefined,
    headerColor: undefined,
};

export default ActivityPageDetails;
