# json.partial! "api/bills/bill", bill: @bill
json.extract! @bill, :id, :author_id, :amount, :category, :description, :friend_list, :notes, :payer_id

json.comments do
  @bill.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :commenter_id, :bill_id, :comment, :created_at, :updated_at
    end
  end
end

# , :friend_list
# json.set! :friends do
  # @bill_friends
  # debugger
  # @bill_friends.each do |k,v|
  #   json.set! k do
  #     json.extract! k[v], :id, :value, :label
  #   end
  # end
# end
