// index
export const fetchUsers = () => {
    return (
        $.ajax({
            url: `/api/users`,
            method: 'GET'
        })
    )
}
// show
export const fetchUser = user => {
    return (
        $.ajax({
            url: `/api/users/${user.id}`,
            method: '',
            data: { user }
        })
    )
}

// create
export const postUser = user => {
    return (
        $.ajax({
            url: `/api/users`,
            method: 'POST',
            data: { user }
        })
    )
}


