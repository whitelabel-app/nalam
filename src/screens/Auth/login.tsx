import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import firebase from 'react-native-firebase';
import {
    Container,
    HeaderContainer,
    Header,
    ArrowLeftIcon,
    Steps,
    Title,
    Content,
    ContentScroll,
    BottomBar,
    NextButton,
    InputPhoneNumber,
    ArrowRightIcon,
    LogoSvg,
    BottomText,
    Link,
    TermsAndCond,
} from './styled';
import { ButtonIcon } from 'react-native-rainbow';

export default function LoginScreen(props) {
    const [phoneValue, setPhoneValue] = useState<any>();
    const { navigate, goBack } = props.navigation;

    function authenticate() {
        if (phoneValue && phoneValue.phone) {
            const { countryCode, phone } = phoneValue;
            const phoneNumber = `${countryCode}${phone}`;

            navigate('AppLoading');
            firebase
                .auth()
                .signInWithPhoneNumber(phoneNumber)
                .then(confirmResult => {
                    navigate('VerifyCode', {
                        confirmResult,
                    });
                })
                .catch(error => {
                    navigate('Login');
                    Alert.alert(error.message);
                });
        } else {
            Alert.alert('Looks like you forgot enter your phone number');
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <Header>
                    <ButtonIcon
                        icon={<ArrowLeftIcon />}
                        onPress={() => goBack()}
                    />
                    <Steps>1/2</Steps>
                </Header>
                <LogoSvg />
            </HeaderContainer>
            <Content>
                <ContentScroll>
                    <Title>Let's get started</Title>
                    <InputPhoneNumber
                        placeholder="Enter Phone Number"
                        label="phone number"
                        value={phoneValue}
                        onChange={setPhoneValue}
                    />
                </ContentScroll>
                <BottomBar>
                    <BottomText>
                        Be continuing you may receive an SMS for verification.
                    </BottomText>
                    <NextButton
                        variant="brand"
                        size="large"
                        icon={<ArrowRightIcon />}
                        onPress={authenticate}
                    />
                </BottomBar>
            </Content>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Link onPress={() => navigate('PrivacyPolicy')}>
                    <TermsAndCond>Privacy Policy</TermsAndCond>
                </Link>
                <BottomText style={{ marginHorizontal: 8 }}>and</BottomText>
                <Link onPress={() => navigate('TermsAndConditions')}>
                    <TermsAndCond>Terms and Conditions</TermsAndCond>
                </Link>
            </View>
        </Container>
    );
}

LoginScreen.navigationOptions = {
    header: null,
};
