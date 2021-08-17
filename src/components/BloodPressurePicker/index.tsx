import React from 'react';
import PropTypes from 'prop-types';
import { View, Picker } from 'react-native';

export default function BloodPressurePicker(props) {
    const {
        onChange,
        value: { sys, dia },
    } = props;

    return (
        <View style={{ flexDirection: 'row' }}>
            <Picker
                style={{ flex: 0.5 }}
                selectedValue={sys}
                onValueChange={sysValue => onChange({ sys: sysValue, dia })}>
                {Array(286)
                    .fill(1)
                    .map((item, index) => {
                        const key = `sys-${index}`;
                        const label = `${index} Sys`;

                        return (
                            <Picker.Item
                                key={key}
                                label={label}
                                value={index}
                            />
                        );
                    })}
            </Picker>
            <Picker
                style={{ flex: 0.5 }}
                selectedValue={dia}
                onValueChange={diaValue => onChange({ sys, dia: diaValue })}>
                {Array(201)
                    .fill(1)
                    .map((item, index) => {
                        const key = `dia-${index}`;
                        const label = `${index} Dia`;

                        return (
                            <Picker.Item
                                key={key}
                                label={label}
                                value={index}
                            />
                        );
                    })}
            </Picker>
        </View>
    );
}

BloodPressurePicker.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
};

BloodPressurePicker.defaultProps = {
    value: { sys: 105, dia: 78 },
    onChange: () => {},
};
