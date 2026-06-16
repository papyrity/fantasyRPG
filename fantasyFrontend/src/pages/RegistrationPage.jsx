import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function RegistrationPage () {
    const [formData, setFormData] = useState({
        username: '', 
        password: '',
        passwordConfirmation: '',
        });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { register } = useAuth()
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

        if(formData.password !== formData.passwordConfirmation) {
            setError('Passwords do not match')
            return
        }

        if(formData.password.length < 8) {
            setError('Password must be at least 8 characters long.')
            return
        }
        
        setIsLoading(true);

        try {
            await register(formData.username, formData.password)
            navigate('/')
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
                <label htmlFor="register-username">Username</label>
                <input
                type="text"
                id="register-username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Username"
                required
                disabled={isLoading}
                />
            </div>

            <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input
                type="password"
                id="register-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                disabled={isLoading}
                />
            </div>

            <div className="form-group">
                <label htmlFor="register-password-confirmation">Confirm Password</label>
                <input
                type="password"
                id="register-password-confirmation"
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                disabled={isLoading}
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
            <p>
                Already have an account?{' '}
                <Link to="/login">Log In</Link>
            </p>
        </form>
    )
}

export default RegistrationPage;