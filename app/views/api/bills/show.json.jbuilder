# json.partial! "api/bills/bill", bill: @bill
json.extract! @bill, :id, :author_id, :amount, :category, :description, :notes, :payer_id, :friend_list


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
# json.comments do
#   @bill.comments.each do |comment|
#     json.set! comment.id do
#       json.extract! comment, :id, :comment, :comment_id, :bill_id
#     end
#   end
# end
