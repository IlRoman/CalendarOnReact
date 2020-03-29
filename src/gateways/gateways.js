const baseUrl = 'https://5e720541942d92001611a8f2.mockapi.io/api/v1/Calendar'

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
