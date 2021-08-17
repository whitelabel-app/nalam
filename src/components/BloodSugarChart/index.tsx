import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Container, UnitLabel } from './styled';
import { useIntl } from 'react-intl';

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    decimalPlaces: 0,
    propsForDots: {
        strokeWidth: '2',
        stroke: '#ffffff',
    },
};

const graphStyle = {
    marginVertical: 8,
};

const BloodSugarChart = props => {
    const { data } = props;
    const intl = useIntl();

    if (data.length === 0) {
        return null;
    }

    const cleanData = data
        .map(bloodSugarItem => {
            return {
                label: intl.formatTime(bloodSugarItem.data.dateTime.toDate()),
                value: Number(bloodSugarItem.data.bloodSugar),
            };
        })
        .reverse();

    const width = Dimensions.get('window').width;
    const chartData = {
        labels: cleanData.map(bs => bs.label),
        datasets: [
            {
                data: cleanData.map(bs => bs.value),
            },
        ],
    };

    return (
        <Container>
            <UnitLabel>mg/dL</UnitLabel>
            <LineChart
                data={chartData}
                width={width}
                height={170}
                chartConfig={chartConfig}
                style={graphStyle}
                fromZero={true}
                withShadow={false}
                withOuterLines={false}
            />
        </Container>
    );
};

BloodSugarChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.shape({
                dateTime: PropTypes.shape({
                    toDate: PropTypes.func,
                }),
                bloodSugar: PropTypes.number,
            }),
        }),
    ),
    style: PropTypes.object,
};

BloodSugarChart.defaultProps = {
    data: [],
    style: undefined,
};

export default BloodSugarChart;
