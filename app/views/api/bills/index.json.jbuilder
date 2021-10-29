@bills.each do |bill|
  json.set! bill.id do
    json.partial! "api/bills/bill", bill: bill
  end
  # json.comments do
  #   bill.comments.each do |comment|
  #     json.set! comment.id do
  #       json.extract! comment, :id, :commenter_id, :bill_id
  #     end
  #   end
  # end
end