const baseUrl = 'https://crudcrud.com/api/c571ed767db045e8b45322e5ee7733a9/tasks'

export const getEventsList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
}

export const postToServer = formData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(formData)
    })
}

export const updateNewTask = (eventId, upDateEventData) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(upDateEventData)
    })
}

export const deleteNewEvent = (eventId) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
}
