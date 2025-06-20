const API_URL = 'http://localhost:3000';

export async function registerUser(data) {
    const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Erreur lors de l’inscription');
    }

    return await res.json();
}

export async function loginUser(data) {
    const res = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Erreur lors de la connexion');
    }

    return await res.json(); // ici tu recevras { token, user }
}
