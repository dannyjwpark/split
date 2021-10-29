# json.partial! "api/bills/bill", bill: @bill
json.extract! @bill, :id, :author_id, :description, :category, :notes, :amount, :payer_id
json.comments do
  @bill.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :comment, :comment_id, :bill_id
    end
  end
end
