import React from 'react';
import PropTypes from 'prop-types';
import { LikeButton } from 'react-native-rainbow';
import RenderIf from 'react-native-rainbow/dist/components/RenderIf';
import { createSetDocAction, useDoc } from 'rainbow-firebase-hooks';
import { getCurrentUserUid } from '../../redux/services/auth';
import { updateDoc } from '../../redux/services/firebase';
import { ScoreSectionContainer, ScoreSectionLabel } from './styled';

export default function ScoreSectionHeader(props) {
    const { isCurrentLoggedUser, uid, formattedDate } = props;
    const path = `users/${uid}/history/${formattedDate}/reactions/${getCurrentUserUid()}`;
    const [setItemBloodPressure] = createSetDocAction({
        path,
    });
    const [reaction] = useDoc({
        path,
    });

    const handleChange = value => {
        if (reaction) {
            return updateDoc({
                path,
                data: {
                    value,
                },
            });
        }
        return setItemBloodPressure({
            value,
        });
    };

    return (
        <ScoreSectionContainer>
            <ScoreSectionLabel>Score</ScoreSectionLabel>
            <RenderIf isTrue={!isCurrentLoggedUser}>
                <LikeButton
                    value={reaction?.data?.value}
                    onChange={handleChange}
                    showLabel
                />
            </RenderIf>
        </ScoreSectionContainer>
    );
}

ScoreSectionHeader.propTypes = {
    isCurrentLoggedUser: PropTypes.bool,
    uid: PropTypes.string,
    formattedDate: PropTypes.string,
};

ScoreSectionHeader.defaultProps = {
    isCurrentLoggedUser: true,
    uid: undefined,
    formattedDate: undefined,
};
