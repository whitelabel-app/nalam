import React from 'react';
import PropTypes from 'prop-types';
import {
    CardItem,
    ChevronRightIcon,
    CardItemIconContainer,
    CardItemIcon,
} from './styled';

export default function GroupsList({ groups, navigation }) {
    return groups.map((group, index) => {
        if (group) {
            const key = `group-${index}`;
            const { name } = group.data;

            return (
                <CardItem
                    key={key}
                    label={name}
                    action={<ChevronRightIcon />}
                    onPress={() =>
                        navigation.navigate('GroupDetails', { group })
                    }
                    icon={
                        <CardItemIconContainer>
                            <CardItemIcon />
                        </CardItemIconContainer>
                    }
                />
            );
        }
        return null;
    });
}

GroupsList.propTypes = {
    groups: PropTypes.array,
    navigation: PropTypes.object,
};

GroupsList.defaultProps = {
    groups: [],
    navigation: {},
};
