import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { getFormattedDay } from '../../helpers';
import MoodOutput from '../../components/MoodOutput';
import DailyItem from '../DailyItem';
import { Style } from '../types';

interface Props extends Style {
    list: Array<any>;
    onSelect?: (value?: any) => void;
}

const BloodPressureList: React.FC<Props> = props => {
    const { list, onSelect } = props;
    const intl = useIntl();

    return (
        <>
            {list.map((bloodPressure, index) => {
                const {
                    data: { sys, dateTime: dateTimestamp, dia },
                } = bloodPressure;
                const dateTime = dateTimestamp.toDate();
                const itemKey = `blood_pressure_${index}`;
                return (
                    <DailyItem
                        key={itemKey}
                        day={getFormattedDay(dateTime.getDay())}
                        label={`${sys}/${dia}`}
                        date={intl.formatTime(dateTime)}
                        onPress={onSelect && (() => onSelect(bloodPressure))}
                        description={
                            <MoodOutput size="medium" label="Normal" />
                        }
                    />
                );
            })}
        </>
    );
};

BloodPressureList.propTypes = {
    list: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
};

BloodPressureList.defaultProps = {
    list: [],
    onSelect: undefined,
};

export default BloodPressureList;
