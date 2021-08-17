import React from 'react';
import PropTypes from 'prop-types';
import DailyItem from '../DailyItem';
import { getFormattedDay } from '../../helpers';
import { Style } from '../types';
import { MoodOutputContainer } from './styled';
import useStepsLevel from '../../redux/services/hooks/useStepsLevel';

function ListItem(props) {
    const { stepsItem, index, uid } = props;
    const { dateTime, steps } = stepsItem;
    const itemKey = `steps_${index}`;
    const stepsLevel = useStepsLevel(uid, dateTime);
    if (steps || steps === 0) {
        return (
            <DailyItem
                key={itemKey}
                day={getFormattedDay(dateTime.getDay())}
                label={`${steps}`}
                description={
                    <MoodOutputContainer size="medium" label={stepsLevel} />
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
}

const StepsList: React.FC<Props> = props => {
    const { uid, list } = props;

    return (
        <>
            {list.map((stepsItem, index) => (
                <ListItem stepsItem={stepsItem} index={index} uid={uid} />
            ))}
        </>
    );
};

StepsList.propTypes = {
    list: PropTypes.array.isRequired,
};

StepsList.defaultProps = {
    list: [],
};

export default StepsList;
