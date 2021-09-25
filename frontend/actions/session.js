import {
    postUser,
    deleteSession,
    postSession
} from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


// action creators
const receiveCurrentUser = user => ({
    // POJO 
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})


// thunk action
export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
    // upon successful login, take a user object & dispatch receiveCurrentUser
    .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
    // upon succesful logout, dispatch logoutCurrentUser  
    .then(() => dispatch(logoutCurrentUser()));