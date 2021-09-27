import {deleteSession, postSession} from '../util/session_api';
import { postUser } from '../util/user_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


const receiveCurrentUser = user => ({
    // POJO 
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})



// thunk action creators
export const createNewUser = user => dispatch => {
    return postUser(user)
        .then(user => dispatch(receiveCurrentUser(user)));
}
export const login = user => dispatch => {
    return postSession(user)
        // upon successful login, take a user object & dispatch receiveCurrentUser
        .then(user => dispatch(receiveCurrentUser(user)));
}
export const logout = () => dispatch => {
    return deleteSession()
        // upon succesful logout, dispatch logoutCurrentUser  
        .then(() => dispatch(logoutCurrentUser()));
}  