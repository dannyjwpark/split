import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
      case RECEIVE_COMMENT:
        return Object.assign({}, state, {[action.comment.id]: action.comment})
      case REMOVE_COMMENT:
        const newState = Object.assign({}, state);
        delete newState[action.comment.comment_id]
        return newState;
      default:
        return state;
  }
}

export default commentsReducer;
