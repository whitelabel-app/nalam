import React from 'react';
import PropTypes from 'prop-types';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Style } from '../types';

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 0.8,
    decimalPlaces: 0,
};

const graphStyle = {
    marginVertical: 8,
};

const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

interface Props extends Style {
    data: Array<number>;
}

const SummaryBarChart: React.FC<Props> = props => {
    const { data } = props;
    const width = Dimensions.get('window').width - 10;
    const chartData = {
        labels: labels.slice(0, data.length),
        datasets: [
            {
                data: data.reverse(),
            },
        ],
    };

    return (
        <BarChart
            width={width}
            height={200}
            data={chartData}
            chartConfig={chartConfig}
            style={graphStyle}
            yAxisLabel=""
            yAxisSuffix=""
            fromZero={true}
        />
    );
};

SummaryBarChart.propTypes = {
    data: PropTypes.array.isRequired,
    style: PropTypes.object,
};

SummaryBarChart.defaultProps = {
    data: [],
    style: undefined,
};

export default SummaryBarChart;
