import React, { useEffect } from 'react';
import { Picker } from 'react-native';
import PropTypes from 'prop-types';

export default function HeartRatePicker(props) {
    const { onChange, value } = props;
    useEffect(() => {
        onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Picker selectedValue={value} onValueChange={onChange}>
            {Array(191)
                .fill(1)
                .map((item, index) => {
                    const key = `item-${index}`;
                    const itemValue = index + 30;
                    const label = `${itemValue} bpm`;

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

HeartRatePicker.propTypes = {
    style: PropTypes.object,
    value: PropTypes.number,
    onChange: PropTypes.func,
};

HeartRatePicker.defaultProps = {
    style: undefined,
    value: 70,
    onChange: () => {},
};
