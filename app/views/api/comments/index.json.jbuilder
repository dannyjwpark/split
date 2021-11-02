@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.comment comment.comment
    json.commenter_id comment.commenter_id
    json.bill_id comment.bill_id
    json.created_at comment.created_at
    # json.extract! comment, :id, :commenter_id, :bill_id, :comment
  end
end
