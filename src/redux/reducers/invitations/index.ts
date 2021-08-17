import { LOAD_PHONE_CONTACTS } from '../../actions/invitations';

const initialState = {
    contacts: [],
};

function loadContacts(state, { contacts }) {
    return {
        contacts,
    };
}

export default function invitationsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PHONE_CONTACTS:
            return loadContacts(state, action);

        default:
            return state;
    }
}
