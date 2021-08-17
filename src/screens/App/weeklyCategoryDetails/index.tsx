import React from 'react';
import { ScrollView } from 'react-native';
import { Badge } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import DailyItem from '../../../components/DailyItem';
import SummaryBarChart from '../../../components/SummaryBarChart';
import SummaryLineChart from '../../../components/SummaryLineChart';
import {
    Container,
    TopBar,
    BackButton,
    Title,
    Total,
    TopBarIcon,
    Value,
    TotalContainer,
    Header,
    Label,
    TitleContainer,
    ChartContainer,
} from './styled';

export default function WeeklyCategoryDetails({ navigation }) {
    const {
        goBack,
        state: {
            params: {
                data = [],
                label = '',
                avg = 0,
                total,
                title = '',
                color = '',
                isLineChartType = false,
            },
        },
    } = navigation;
    const hasTotal = total || total === 0;
    const SummaryChart = isLineChartType ? SummaryLineChart : SummaryBarChart;
    return (
        <Container>
            <TopBar color={color}>
                <TitleContainer>
                    <BackButton
                        icon={<TopBarIcon />}
                        onPress={() => goBack()}
                    />
                    <Title isCenter={!hasTotal} numberOfLines={1}>
                        {title}
                    </Title>
                    <TotalContainer>
                        <RenderIf isTrue={hasTotal}>
                            <Total>TOTAL</Total>
                            <Value>{total}</Value>
                        </RenderIf>
                    </TotalContainer>
                </TitleContainer>
                <ChartContainer>
                    <SummaryChart data={data.map(item => item.value)} />
                </ChartContainer>
            </TopBar>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 20,
                    paddingTop: 20,
                    flexGrow: 1,
                    alignItems: 'center',
                }}>
                <Header>
                    <Label>Summary</Label>
                    <Badge label={`AVG: ${avg}`} />
                </Header>
                {data.map((dailyItem, index) => {
                    const { value, day } = dailyItem;
                    const key = `dailyItem_${index}`;
                    return (
                        <DailyItem
                            label={`${
                                Number.isInteger(Number(value))
                                    ? value
                                    : Number(value).toFixed(1)
                            } ${label}`}
                            day={day}
                            key={key}
                        />
                    );
                })}
            </ScrollView>
        </Container>
    );
}
