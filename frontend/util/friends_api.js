// index
export const fetchFriends = user_id => (
        $.ajax({
            method: 'GET',
            url: `/api/users/${user_id}/friends`,
    })
);

// show
export const fetchFriend = friend => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/users/${friend.user_id}/friends/${friend.friend_id}`,
    })
    )
};

// create
export const addFriend = friend => (
        $.ajax({
        method: 'POST',
            url: `/api/users/${friend.friend_user_id}/friends`,
            data: {name: friend.name},
            // contentType: false,
            // processData: false
    })
);

// destroy
export const deleteFriend = friend => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/users/${friend.user_id}/friends/${friend.friend_id}`,
            data: friend
    })
    )
};

