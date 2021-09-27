// login
export const postSession = user => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
}

// logout
export const deleteSession = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}