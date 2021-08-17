import { LOAD_GROUP_MEMBERS } from '../../actions/groups';

const initialState = {};

function loadMembers(state, { groupId, members }) {
    return {
        ...state,
        [groupId]: {
            members,
        },
    };
}

export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_GROUP_MEMBERS:
            return loadMembers(state, action);

        default:
            return state;
    }
}
