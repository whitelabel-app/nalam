import React from 'react';
import { FlatList } from 'react-native';
import { Avatar } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { Moon, Excercise } from '../../../components/Icons';
import styled from 'styled-components/native';
import { getCurrentUserUid } from '../../../redux/services/auth';
import useStepsLevel from '../../../redux/services/hooks/useStepsLevel';
import useStepsProgressScore from '../../../redux/services/hooks/useStepsProgressScore';
import useSleepLevel from '../../../redux/services/hooks/useSleepLevel';
import useSleepProgressScore from '../../../redux/services/hooks/useSleepProgressScore';
import useActiveTimeLevel from '../../../redux/services/hooks/useActiveTimeLevel';
import useActiveTimeProgressScore from '../../../redux/services/hooks/useActiveTimeProgressScore';
import {
    getUserInitials,
    getKeyExtractor,
    getFormattedDate,
} from '../../../helpers';
import { UserFilled } from '../../../components/Icons';
import {
    ChevronRightIcon,
    MemberItem,
    MemberScoresContainer,
    ScoreActivityIcon,
    ActivityScoreContainer,
} from './styled';

export const StyledUserFilled = styled(UserFilled)`
    height: 48px;
    width: 48px;
`;

function Member(props) {
    const { item: user, onSelectMember, today } = props;
    const isYou = getCurrentUserUid() === user.id;

    const onPress =
        typeof onSelectMember === 'function' && !isYou
            ? () => onSelectMember(user)
            : undefined;

    const userProfile = user.data.user;
    const name = isYou ? 'You' : userProfile?.fullName;

    const stepsLevel = useStepsLevel(user.id, today);
    const stepsProgressScore = useStepsProgressScore(user.id, today);

    const sleepLevel = useSleepLevel(user.id, today);
    const sleepProgressScore = useSleepProgressScore(user.id, today);

    const activeTimeLevel = useActiveTimeLevel(user.id, today);
    const activeTimeProgressScore = useActiveTimeProgressScore(user.id, today);

    if (userProfile) {
        const avatar = userProfile?.avatar640;
        return (
            <MemberItem
                icon={
                    <Avatar
                        size="large"
                        src={avatar}
                        initials={getUserInitials(userProfile)}
                    />
                }
                label={name}
                description={
                    <MemberScoresContainer>
                        <ActivityScoreContainer
                            label={stepsLevel}
                            value={stepsProgressScore}
                            icon={<ScoreActivityIcon />}
                            variant="success"
                            size="small"
                        />
                        <ActivityScoreContainer
                            label={sleepLevel}
                            value={sleepProgressScore}
                            icon={<ScoreActivityIcon as={Moon} />}
                            size="small"
                        />
                        <ActivityScoreContainer
                            label={activeTimeLevel}
                            value={activeTimeProgressScore}
                            icon={<ScoreActivityIcon as={Excercise} />}
                            variant="warning"
                            size="small"
                        />
                    </MemberScoresContainer>
                }
                action={
                    <RenderIf isTrue={!isYou}>
                        <ChevronRightIcon />
                    </RenderIf>
                }
                onPress={onPress}
            />
        );
    }
    return (
        <MemberItem
            icon={<StyledUserFilled />}
            label={user?.data?.phoneNumber}
        />
    );
}

const flatListStyles = {
    marginBottom: 24,
    marginTop: 16,
};

export default function Members(props) {
    const { data, onSelectMember } = props;
    const today = getFormattedDate(new Date());
    return (
        <FlatList
            contentContainerStyle={flatListStyles}
            data={data}
            renderItem={({ item }) => (
                <Member
                    onSelectMember={onSelectMember}
                    item={item}
                    today={today}
                />
            )}
            keyExtractor={getKeyExtractor}
        />
    );
}
