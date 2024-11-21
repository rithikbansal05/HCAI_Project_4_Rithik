import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username && password) {
            // If both fields are populated, navigate to the main landing page
            navigate("/home");
        }
    };

    return (
        <div className="login-container">
            <h3 className="login-header">Login</h3>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="login-input"
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="login-input"
                />
            </div>
            <button
                onClick={handleLogin}
                className="login-button"
                disabled={!username || !password}
            >
                Login
            </button>
        </div>
    );
}

export default LoginPage;
