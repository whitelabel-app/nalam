import React from 'react';
import PropTypes from 'prop-types';
import { Style } from '../types';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

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

interface Props extends Style {
    data: Array<number>;
}

const SummaryLineChart: React.FC<Props> = props => {
    const { data } = props;

    if (data.length === 0) {
        return null;
    }

    const width = Dimensions.get('window').width;
    const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const chartData = {
        labels: labels.slice(0, data.length),
        datasets: [
            {
                data,
            },
        ],
    };

    return (
        <LineChart
            data={chartData}
            width={width}
            height={170}
            chartConfig={chartConfig}
            bezier
            style={graphStyle}
            fromZero={true}
        />
    );
};

SummaryLineChart.propTypes = {
    data: PropTypes.array.isRequired,
    style: PropTypes.object,
};

SummaryLineChart.defaultProps = {
    data: [],
    style: undefined,
};

export default SummaryLineChart;
