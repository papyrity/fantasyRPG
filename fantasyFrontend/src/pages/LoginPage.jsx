import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../api";


function LoginPage({ onLogin }) {
    const [formData, setFormData] = useState({username: '', password: ''});

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if(error) setError("")
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            await login(formData.username, formData.password)
            navigate('/home')
        } catch(err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
                <label htmlFor="login-username">Username</label>
                <input
                type="text"
                id="login-username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Username"
                required
                disabled={isLoading}
                />
            </div>

            <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                type="password"
                id="login-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                disabled={isLoading}
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
        </form>
    )
}

export default LoginPage;