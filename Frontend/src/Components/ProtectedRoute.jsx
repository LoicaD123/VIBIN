import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const token = sessionStorage.getItem('token');

    if (!token) {
        // Si l'utilisateur n'est pas connecté, redirige vers la page de login
        return <Navigate to="/" replace />;
    }

    // Si le token est présent, affiche le composant protégé
    return children;
}
