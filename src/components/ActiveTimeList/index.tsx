import React from 'react';
import PropTypes from 'prop-types';
import DailyItem from '../DailyItem';
import useActiveTimeLevel from '../../redux/services/hooks/useActiveTimeLevel';
import { getFormattedDay } from '../../helpers';
import { Style } from '../types';
import FormattedMinutes from '../FormattedMinutes';
import { MoodOutputContainer } from './styled';
import useHeartRate from '../../redux/services/hooks/useHeartRate';

function ListItem(props) {
    const { dateTime, index, uid, onSelect } = props;
    const itemKey = `active_time_${index}`;
    const activeTimeLevel = useActiveTimeLevel(uid, dateTime);
    const heartRate = useHeartRate(uid, dateTime);

    if (heartRate?.zones) {
        return (
            <DailyItem
                key={itemKey}
                day={getFormattedDay(dateTime.getDay())}
                label={
                    <FormattedMinutes
                        size="medium"
                        minutes={heartRate?.activeTime}
                    />
                }
                onPress={() => onSelect(dateTime)}
                description={
                    <MoodOutputContainer
                        size="medium"
                        label={activeTimeLevel}
                    />
                }
            />
        );
    }
    return (
        <DailyItem
            key={itemKey}
            day={getFormattedDay(dateTime.getDay())}
            label="No data"
        />
    );
}

interface Props extends Style {
    uid: string;
    list: Array<any>;
    onSelect: (value?: any) => void;
}

const ActiveTimeList: React.FC<Props> = props => {
    const { uid, list, onSelect } = props;

    return (
        <>
            {list.map((dateTime, index) => (
                <ListItem
                    dateTime={dateTime}
                    index={index}
                    uid={uid}
                    onSelect={onSelect}
                />
            ))}
        </>
    );
};

ActiveTimeList.propTypes = {
    list: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

ActiveTimeList.defaultProps = {
    list: [],
    onSelect: () => {},
};

export default ActiveTimeList;
