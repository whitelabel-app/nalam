import React from 'react';
import PropTypes from 'prop-types';
import DailyItem from '../DailyItem';
import { getFormattedDay } from '../../helpers';
import { Style } from '../types';
import { useIntl } from 'react-intl';
import { MoodContainer, MoodIcon, Mood } from './styled';

interface Props extends Style {
    list: Array<any>;
    onSelect?: (value?: any) => void;
}

const BloodSugarList: React.FC<Props> = props => {
    const { list, onSelect } = props;
    const intl = useIntl();

    return (
        <>
            {list.map((bloodSugarItem, index) => {
                const {
                    data: { dateTime: dateTimestamp, bloodSugar },
                } = bloodSugarItem;
                const dateTime = dateTimestamp.toDate();
                const itemKey = `blood_sugar_${index}`;
                return (
                    <DailyItem
                        key={itemKey}
                        day={getFormattedDay(dateTime.getDay())}
                        label={`${bloodSugar} mg/dL`}
                        date={intl.formatTime(dateTime)}
                        onPress={onSelect && (() => onSelect(bloodSugarItem))}
                        description={
                            <MoodContainer>
                                <MoodIcon />
                                <Mood>Normal</Mood>
                            </MoodContainer>
                        }
                    />
                );
            })}
        </>
    );
};

BloodSugarList.propTypes = {
    list: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
};

BloodSugarList.defaultProps = {
    list: [],
    onSelect: undefined,
};

export default BloodSugarList;
