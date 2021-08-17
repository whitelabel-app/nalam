import React from 'react';
import { HomeContainer, LogoSvg, StartButton } from './styled';
import Home from '../../components/Icons/home';

export default function HomeScreen(props) {
    const {
        navigation: { navigate },
    } = props;

    return (
        <HomeContainer>
            <LogoSvg />
            <Home />
            <StartButton
                label="Start"
                variant="brand"
                onPress={() => navigate('Login')}
            />
        </HomeContainer>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};
