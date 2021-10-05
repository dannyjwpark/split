@friends.each do |friend|
    json.set! friend.id.do
        json.id friend.id
        json.name friend.name
    end
end