import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      // sets errors to the action's errors
      return action.errors;

    case RECEIVE_CURRENT_USER:
      // clears the errors
      return [];

    default:
      return oldState;
  }
};
