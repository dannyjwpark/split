import * as CommentsUtil from '../util/comments_api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = (comments) => {
  return({
    type: RECEIVE_COMMENTS,
    comments
  })
}
const receiveComment = (comment) => {
  return({
    type: RECEIVE_COMMENT,
    comment
  })
}
const removeComment = (comment) => {
  return({
    type: REMOVE_COMMENT,
    comment
  })
}

export const fetchComments = (bill_id) => dispatch => (
  CommentsUtil.fetchComments(bill_id).then(comments => (
    dispatch(receiveComments(comments))
  ))
);

export const fetchComment = (comment) => dispatch => (
  CommentsUtil.fetchComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ))
);

export const addComment = (comment) => dispatch => (
  CommentsUtil.addComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ))
);

export const updateComment = (comment) => dispatch => (
  CommentsUtil.updateComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ))
);

export const deleteComment = (comment) => dispatch => (
  CommentsUtil.deleteComment(comment).then(comment => (
    dispatch(removeComment(comment))
  ))
);