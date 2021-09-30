import { RECEIVE_CURRENT_USER, LOGOUT_USER} from '../actions/session_actions';

// default if no current user
const _nullSession = Object.freeze({
    id: null,
});

// reducer: takes in state, action
const sessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id };

        case LOGOUT_USER:
            return _nullSession;

        default:
            return oldState;
    }
};

export default sessionReducer;
