import { Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import Layout from "../Components/Layout.jsx";
import ProtectedRoute from "../Components/ProtectedRoute.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Layout>
                            <HomePage />
                        </Layout>
                    </ProtectedRoute>
                }
            />


        </Routes>


    );
}
