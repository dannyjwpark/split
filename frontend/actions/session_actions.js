import {deleteSession, postSession} from '../util/session_api';
import { createUser } from '../util/user_api';

// action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = user => {
    // POJO 
    return ({
        type: RECEIVE_CURRENT_USER,
        user,
    })
};

const logoutUser = () => {
    return ({
        type: LOGOUT_USER,
    })
};

export const receiveErrors = errors => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
};

// thunk action creators
// export const createNewUser = user => dispatch => {
//     return createUser(user)
//         .then(user => dispatch(receiveCurrentUser(user)))
//         , err => (
//             dispatch(receiveErrors(err.responseJSON))
//         );
// }

// upon successful login, take a user object & dispatch receiveCurrentUser
export const login = user => dispatch => {
    return postSession(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        , err => (
            dispatch(receiveErrors(err.responseJSON))
        );
}

// upon succesful logout, dispatch logoutCurrentUser  
export const logout = () => dispatch => {
    return deleteSession()
        .then(() => dispatch(logoutUser())), 
        err => (
            dispatch(receiveErrors(err.responseJSON))
        );;
}  