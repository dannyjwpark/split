import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;

        case RECEIVE_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user });

        default:
            return oldState;
    }
};

export default usersReducer;
