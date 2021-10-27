@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.commenter_id comment.commenter_id
    json.bill_id comment.bill_id
  end
end
