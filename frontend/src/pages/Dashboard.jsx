import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./DashBoard.css";

function DashBoard() {
    return (
        <div className="dashboard-wrapper">
            <Navbar />
            
            <main className="dashboard-content">
                <div className="dashboard-hero">
                    <h1 className="db-title">
                        Welcome to your <span className="accent">Creative Studio</span>
                    </h1>
                    <p className="db-subtitle">
                        This is your personal space to manage projects, track your growth, 
                        and connect with the community.
                    </p>
                    <div className="db-placeholder-box">
                        <p>Your creative feed will appear here soon...</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default DashBoard;