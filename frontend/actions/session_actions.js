import {deleteSession, postSession} from '../util/session_api';
import { postUser } from '../util/user_api';

// action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = user => {
    // POJO 
    return ({
        type: RECEIVE_CURRENT_USER,
        user,
    })
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    })
};

export const receiveErrors = errors => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
};

// thunk action creators
export const createNewUser = user => dispatch => {
    return postUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        , err => (
            dispatch(receiveErrors(err.responseJSON))
        );
}
export const login = user => dispatch => {
    return postSession(user)
        // upon successful login, take a user object & dispatch receiveCurrentUser
        .then(user => dispatch(receiveCurrentUser(user)))
        , err => (
            dispatch(receiveErrors(err.responseJSON))
        );
}
export const logout = () => dispatch => {
    return deleteSession()
        // upon succesful logout, dispatch logoutCurrentUser  
        .then(() => dispatch(logoutCurrentUser())), 
        err => (
            dispatch(receiveErrors(err.responseJSON))
        );;
}  