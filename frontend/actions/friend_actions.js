import * as FriendsUtil from '../util/friends_api'

// action constants
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS'
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND'
export const REMOVE_FRIEND = 'REMOVE_FRIEND'

const receiveFriends = (friends) => {
    return ({
        type: RECEIVE_FRIENDS,
        friends,
    })
}
const receiveFriend = (friend) => {
    return ({
        type: RECEIVE_FRIEND,
        friend,
    })
}
const removeFriend = (friend) => {
    return ({
        type: REMOVE_FRIEND,
        friend,
    })
}

// thunk action creators
export const fetchFriends = (user_id) => dispatch => {
    return FriendsUtil.fetchFriends(user_id)
        .then(friends => (dispatch(receiveFriends(friends))
        .catch((error) => {
            console.log(error)
        })
    ))
};

export const fetchFriend = (friend) => dispatch => {
    return FriendsUtil.fetchFriend(friend)
        .then(friend => (dispatch(receiveFriend(friend))
    ))
};

export const addFriend = (friend) => dispatch => {
    debugger;
    return FriendsUtil.addFriend(friend)
        .then(friend => (dispatch(receiveFriend(friend))
        .catch((error) => {
            console.log(error)
        })
    ))
};

export const deleteFriend = (friend) => dispatch => {
    return FriendsUtil.deleteFriend(friend)
        .then(friend => (dispatch(removeFriend(friend))
    ))
};