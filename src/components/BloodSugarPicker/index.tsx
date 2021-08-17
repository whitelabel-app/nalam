import React from 'react';
import { Picker } from 'react-native';
import PropTypes from 'prop-types';

export default function BloodSugarPicker(props) {
    const { onChange, value } = props;

    return (
        <Picker selectedValue={value} onValueChange={onChange}>
            {Array(300)
                .fill(1)
                .map((item, index) => {
                    const key = `item-${index}`;
                    const itemValue = index + 50;
                    const label = `${itemValue} mg/dL`;

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

BloodSugarPicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

BloodSugarPicker.defaultProps = {
    value: 100,
    onChange: () => {},
};
