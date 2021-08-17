import React from 'react';
import { ChevronRight } from '../Icons';
import { getWeekId } from '../../helpers';
import WeekPicker from './weekPicker';
import {
    DateFilterContainer,
    ButtonIconFilter,
    ChevronFilterButtonIcon,
} from './styled';

export default function WeekSelector({ memberSince, week, onChange }) {
    const isLastWeek = week === getWeekId();
    const memberSinceDate = new Date(memberSince);
    const isNextWeekFromMemberSince =
        week ===
        getWeekId(
            new Date(memberSinceDate.setDate(memberSinceDate.getDate() + 14)),
        );

    const showPrevWeek = () => {
        const datesArray = week.split('_');
        const endDate = new Date(datesArray[1]);
        const prevWeek = getWeekId(endDate);
        onChange(prevWeek);
    };

    const showNextWeek = () => {
        const datesArray = week.split('_');
        const endDate = new Date(datesArray[1]);
        const nextWeek = getWeekId(
            new Date(new Date(endDate).setDate(endDate.getDate() + 10)),
        );
        onChange(nextWeek);
    };

    return (
        <DateFilterContainer>
            <ButtonIconFilter
                variant="neutral"
                size="x-small"
                icon={
                    <ChevronFilterButtonIcon
                        disabled={isNextWeekFromMemberSince}
                    />
                }
                disabled={isNextWeekFromMemberSince}
                onPress={showPrevWeek}
            />
            <WeekPicker
                onChange={onChange}
                memberSince={memberSince}
                selectedWeek={week}
                isLastWeek={isLastWeek}
            />
            <ButtonIconFilter
                variant="neutral"
                size="x-small"
                icon={
                    <ChevronFilterButtonIcon
                        disabled={isLastWeek}
                        as={ChevronRight}
                    />
                }
                disabled={isLastWeek}
                onPress={showNextWeek}
            />
        </DateFilterContainer>
    );
}
