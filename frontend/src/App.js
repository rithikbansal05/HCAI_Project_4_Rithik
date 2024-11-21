import React from 'react';
import Navbar from './Navbar';
import TextCustomizer from './TextCustomizer';
import TextSummarizer from './TextSummarizer';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for Login Page */}
                <Route path="/" element={<LoginPage />} />

                {/* Route for the Main App Page (Post-login) */}
                <Route path="/home" element={
                    <div>
                        <Navbar />
                        <div className="container">
                            <TextCustomizer />
                            <TextSummarizer />
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
