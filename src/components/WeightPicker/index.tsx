import React from 'react';
import { Picker } from 'react-native';
import PropTypes from 'prop-types';

export default function WeightPicker(props) {
    const { onChange, value } = props;

    return (
        <Picker selectedValue={value} onValueChange={onChange}>
            {Array(300)
                .fill(1)
                .map((item, index) => {
                    const key = `item-${index}`;
                    const itemValue = index + 50;
                    const label = `${itemValue} lbs`;

                    return (
                        <Picker.Item
                            key={key}
                            label={label}
                            value={itemValue}
                        />
                    );
                })}
        </Picker>
    );
}

WeightPicker.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
};

WeightPicker.defaultProps = {
    value: 120,
    onChange: () => {},
};
