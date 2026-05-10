const BASE_URL = 'http://localhost:5555'

async function request(path, options = {}) {
    const response = await fetch(`${BASE_URL}${path}`, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
        throw new Error(data.error || `Request failed with status ${response.status}`)
    }

    return data
}

export const api = {
    register: (username, password) => 
        request('/api/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        }),

    login: (username, password) =>
        request('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        }),

    me: () => request('/api/me'),

    logout: () => request('/api/logout', {method: 'DELETE'}),
}