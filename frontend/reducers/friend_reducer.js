import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';

const friendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_FRIENDS:
            return action.friends

        case RECEIVE_FRIEND:
            return Object.assign({}, oldState, { [action.friend.id]: action.friend })

        case REMOVE_FRIEND:
            delete nextState[action.friend.friend_id]
            return nextState

        default:
            return oldState;
    }
};

export default friendsReducer;
