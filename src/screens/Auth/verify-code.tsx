import React from 'react';
import { Alert } from 'react-native';
import { ButtonIcon, InputCode } from 'react-native-rainbow';
import {
    Container,
    HeaderContainer,
    Header,
    Content,
    ArrowLeftIcon,
    Steps,
    Title,
    TextInfo,
    LogoSvg,
    ContentScroll,
} from './styled';

export default function VerifyCodeScreen(props) {
    const { confirmResult } = props.navigation.state.params;
    const { goBack, navigate } = props.navigation;

    function verifyCode(code) {
        navigate('AppLoading');
        return confirmResult.confirm(code).catch(error => {
            navigate('VerifyCode', {
                confirmResult,
            });
            Alert.alert(error.message);
        });
    }

    return (
        <Container>
            <HeaderContainer>
                <Header>
                    <ButtonIcon
                        icon={<ArrowLeftIcon />}
                        onPress={() => goBack()}
                    />
                    <Steps>2/2</Steps>
                </Header>
                <LogoSvg />
            </HeaderContainer>
            <Content>
                <ContentScroll>
                    <Title>Verify your number</Title>
                    <TextInfo>
                        We have sent you an SMS with a code to your phone [phone
                        number]
                    </TextInfo>
                    <InputCode autoFocus onChange={verifyCode} />
                </ContentScroll>
            </Content>
        </Container>
    );
}

VerifyCodeScreen.navigationOptions = {
    header: null,
};
