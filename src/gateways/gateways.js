const baseUrl = 'https://crudcrud.com/api/811a1e23f285493089f63a97303735e2/tasks'

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

export const deleteEvent = (eventId) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
}
