import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session';

// default if no current user
const _nullSession = {
    currentUser: null,
}

// reducer: takes in state, action
export default (state = _nullSession, action) => {
    // freeze to prevent accidentally mutating state
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            returnObject.assign({}, { currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

