import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ import nécessaire
import { registerUser, loginUser } from '../Services/userService';

export default function LoginPage() {
    const navigate = useNavigate(); // ⬅️ hook de navigation
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const data = await loginUser({ email: form.email, password: form.password });
                sessionStorage.setItem('token', data.token);
                navigate('/dashboard'); // ⬅️ redirection après connexion
            } else {
                await registerUser(form);
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.message || 'Une erreur est survenue');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 ">
            <div className="max-w-md w-full rounded-[54px] shadow-lg p-8 bg-white">
                <h1 className="text-[80px] font-[BebasNeuePro-ExpandedExtraBold] text-center text-[#1c1c1c]">
                    Bienvenue
                </h1>
                <p className="text-center text-base text-[#1c1c1c]">
                    {isLogin ? 'Ravie de vous revoir parmi nous !' : 'Créez un compte pour démarrer'}
                </p>
                {error && <div className="text-red-500 text-sm text-center">{error}</div>}

                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mb-6">
                    {!isLogin && (
                        <>
                            <Input
                                label="Nom d’utilisateur"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                label="Adresse"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}
                    <Input
                        label="Adresse Mail"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Mot de passe"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="w-[364px] h-[52px] bg-[#1c1c1c] text-white font-bold rounded-[13px] hover:bg-gray-800 transition flex items-center justify-center"
                        style={{ fontSize: '26px' }}
                    >
                        {isLogin ? 'Se Connecter' : 'S’inscrire'}
                    </button>
                </form>

                <div className="flex justify-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="h-[52px] w-[364px] text-indigo-600 hover:bg-gray-100 font-bold flex items-center justify-center text-[1.3rem] rounded-[13px] transition border border-[#e5e7eb]"
                        style={{ fontSize: 'calc(0.4 * 52px)' }}
                    >
                        {isLogin ? "Pas encore de compte ? S'inscrire" : 'Déjà inscrit ? Se connecter'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Composant Input réutilisable
function Input({ label, type = 'text', name, value, onChange, required }) {
    return (
        <div className="flex items-end w-[364px] h-[52px] px-[18px] py-[14px] gap-[6px] bg-white rounded-[13px]">
            <input
                id={name}
                name={name}
                type={type}
                placeholder={label}
                value={value}
                onChange={onChange}
                required={required}
                style={{ fontSize: 'calc(0.4 * 52px)' }}
                className="w-full h-full bg-white rounded-[6px] outline-none leading-none text-[#1c1c1c] placeholder-[#9ca3af]"
            />
        </div>
    );
}
