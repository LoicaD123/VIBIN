import { Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import Layout from "../Components/Layout.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <HomePage />
                    </Layout>
                }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}
