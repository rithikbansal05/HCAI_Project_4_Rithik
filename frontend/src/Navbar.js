import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Navbar() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogout = () => {
        // Logic for logging out (you can clear session data, etc.)
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">AI Reading Assistant</div>
            <div className="navbar-buttons">
                <button className="navbar-button">Home</button>
                <button className="navbar-button">Profile</button>
                <button className="navbar-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
