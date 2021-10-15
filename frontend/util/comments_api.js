// index
export const fetchComments = bill_id => (
  $.ajax({
    method: 'GET',
    url: `/api/bills/${bill_id}/comments`,
  })
);

// show
export const fetchComment = comment => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/bills/${comment.bill_id}/comments/${comment.comment_id}`,
    })
  )
};

// create
export const addComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/bills/${comment.bill_id}/comments`,
    data: {comment},
  })
);

// update
export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `api/bills/${comment.bill_id}/comments/${comment.comment_id}`,
    data: {comment}
  })
)

// destroy
export const deleteComment = comment => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/bills/${comment.bill_id}/comments/${comment.comment_id}`,
      data: friend
    })
  )
};

