import React from 'react';
import { ScrollView } from 'react-native';
import {
    Shoe,
    Fire,
    Heart,
    Distance,
    Excercise,
} from '../../../components/Icons';
import {
    Container,
    Header,
    BackButton,
    Title,
    LeftContent,
    HeaderIcon,
    ItemContainer,
    Left,
    IconContainer,
    Icon,
    ItemLabel,
    Content,
    Label,
    SwitchContainer,
} from './styled';

export default function GroupSettings({ navigation }) {
    const { goBack } = navigation;

    return (
        <Container>
            <Header>
                <LeftContent>
                    <BackButton
                        icon={<HeaderIcon />}
                        onPress={() => goBack()}
                    />
                    <Title numberOfLines={1}>Group Settings</Title>
                </LeftContent>
            </Header>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 20,
                    paddingTop: 20,
                    flexGrow: 1,
                }}>
                <Label>Share Data</Label>
                <Content>
                    <ItemContainer>
                        <Left>
                            <IconContainer>
                                <Icon as={Shoe} />
                            </IconContainer>
                            <ItemLabel>Steps</ItemLabel>
                        </Left>
                        <SwitchContainer />
                    </ItemContainer>
                    <ItemContainer>
                        <Left>
                            <IconContainer>
                                <Icon as={Distance} />
                            </IconContainer>
                            <ItemLabel>Distance</ItemLabel>
                        </Left>
                        <SwitchContainer />
                    </ItemContainer>
                    <ItemContainer>
                        <Left>
                            <IconContainer>
                                <Icon as={Fire} />
                            </IconContainer>
                            <ItemLabel>Calories</ItemLabel>
                        </Left>
                        <SwitchContainer />
                    </ItemContainer>
                    <ItemContainer>
                        <Left>
                            <IconContainer>
                                <Icon as={Excercise} />
                            </IconContainer>
                            <ItemLabel>Active Time</ItemLabel>
                        </Left>
                        <SwitchContainer />
                    </ItemContainer>
                    <ItemContainer>
                        <Left>
                            <IconContainer>
                                <Icon />
                            </IconContainer>
                            <ItemLabel>Sleep</ItemLabel>
                        </Left>
                        <SwitchContainer />
                    </ItemContainer>
                    <ItemContainer isLast>
                        <Left>
                            <IconContainer>
                                <Icon as={Heart} />
                            </IconContainer>
                            <ItemLabel>Heart Rate</ItemLabel>
                        </Left>
                        <SwitchContainer />
                    </ItemContainer>
                </Content>
            </ScrollView>
        </Container>
    );
}
