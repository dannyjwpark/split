import * as UserUtil from '../util/user_api'

// action constants
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

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

const receiveCurrentUser = user => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user,
    })
};

// thunk action creators

export const fetchUsers = () => dispatch => {
    return UserUtil.fetchUsers()
        .then(users => (dispatch(receiveUsers(users))))
}

export const fetchUser = (user_id) => dispatch => {
    return UserUtil.fetchUser(user_id)
        .then(user => (dispatch(receiveUser(user))))
}

export const createUser = (user) => dispatch => {
    console.log(user);
    return UserUtil.createUser(user)
        // .then(user => (dispatch(receiveUser(user))))
        .then(user => (dispatch(receiveCurrentUser(user))))
}