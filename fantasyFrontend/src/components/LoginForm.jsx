import React, { useState } from "react";

function LoginForm({ onLogin }) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        setError("");
        setIsLoading(true);

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if(response.ok) {
                onSuccess(data);
            } else {
                setError(data.error || 'Login Failed');
            }
        } catch (err) {
            setError('Error. Please try again.');
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
                onSubmit={handleSubmit}
                disabled={isLoading}
            >
                {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
        </form>
    )
}

export default LoginForm;