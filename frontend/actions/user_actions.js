import * as UserUtil from '../util/user_api_util'

// action constants
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = (users) => {
    return({
        type: RECEIVE_USERS,
        users
    })
}

export const receiveUser = (user) => {
    return ({
        type: RECEIVE_USER,
        user
    })
}


// thunk action creators

export const fetchUsers = () => dispatch => {
    return UserUtil.fetchUsers()
        .then(users => (dispatch(receiveUsers(users))))
}

export const fetchUser = (user) => dispatch => {
    return UserUtil.fetchUser(userId)
        .then(user => (dispatch(receiveUsers(user))))
}