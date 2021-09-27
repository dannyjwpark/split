@friends.each do |friend|
    json.set! friend.id.do
        json.id friend.id
        json.name friend.name
        json.email friend.email
    end
end