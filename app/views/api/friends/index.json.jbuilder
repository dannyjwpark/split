@friends.each do |friend|
    json.set! friend.id do
        json.id friend.id
        json.user_id friend.user_id
        json.friend_id friend.friend_id
        json.name friend.name
        json.email friend.email
    end
end