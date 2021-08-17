import React from 'react';
import FitbitHistory from '../../../components/FitbitHistory';
import { getUserInitials } from '../../../helpers';
import {
    TopContent,
    Background,
    Gradient,
    TopBar,
    UserAvatar,
    Title,
    Container,
    BackButton,
    TopBarIcon,
    HistoryContainer,
} from './styled/index';

export default function MemberDetails({ navigation }) {
    const {
        goBack,
        state: {
            params: { member },
        },
    } = navigation;
    const userProfile = member?.data?.user;
    const avatar = userProfile?.avatar640;

    return (
        <Container>
            <TopContent>
                <Background
                    resizeMethod="resize"
                    source={require('./images/image.png')}>
                    <Gradient>
                        <TopBar />
                    </Gradient>
                </Background>
                <UserAvatar
                    size="large"
                    src={avatar}
                    initials={getUserInitials(userProfile)}
                />
                <Title>{userProfile?.fullName}</Title>
                <BackButton icon={<TopBarIcon />} onPress={() => goBack()} />
            </TopContent>
            <HistoryContainer>
                <FitbitHistory
                    showHeartRate
                    showDistance
                    showCalories
                    navigation={navigation}
                    uid={member?.id}
                />
            </HistoryContainer>
        </Container>
    );
}
