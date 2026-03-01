import React from 'react';
import {
    Sparkles, ChevronDown, Image, MessageCircle, Users, TrendingUp, Upload,
    Maximize2,
    Layers
} from 'lucide-react';
import Navbar from '../components/Navbar'; // Navbar her sayfada olacağı için component kalmalı
import "./LandingPage.css"; // CSS'leri burada toplayabilirsin

// --- HERO PARÇASI ---
const Hero = () => (
    <section className="hero-con">
        <div className="container">
            <div className="con-bor">
                <span><Sparkles className="neon-sparkle" size={16} color={"#f74444"} /></span>
                <span>Where artists meet the world</span>
            </div>
            <h1 className="hero-title">
                Share Your <span className="accent">Art</span>, <br />
                <span className="accent-sec">Inspire the World</span>
            </h1>
            <p className="hero-description">
                A creative platform where artists showcase their work,
                receive feedback, and connect with a vibrant community.
            </p>
            <div className="con-buttons">
                <button className="sign-but">
                    Get Started Free <span className="arrow">→</span>
                </button>
                <button className="log-but">Login</button>
            </div>
            <div className="scroll-icon" style={{ display: "none" }}>
                <ChevronDown size={32} strokeWidth={1} />
            </div>
        </div>
    </section>
);

// --- FEATURES PARÇASI ---
const Features = () => (
    <section className="features-section">
        <div className="features-header">
            <span className="sub-title">Platform Features</span>
            <h2 className="main-title">Everything You Need to <br /><span className="action">Thrive</span></h2>
            <p className="desc-text">A complete creative ecosystem designed for artists at every stage of their journey</p>
        </div>

        <div className="features-grid">
            <div className="feature-card">
                <div className="card-icon"><Image size={32} /></div>
                <h3>Share Your 2D & 3D</h3>
                <p>Display your sketches, digital paintings, and 3D models in high resolution.</p>
            </div>

            <div className="feature-card">
                <div className="card-icon"><MessageCircle size={32} /></div>
                <h3>Engage & Comment</h3>
                <p>Leave feedback, discuss techniques, and support artist through meaningful conversations.</p>
            </div>

            <div className="feature-card">
                <div className="card-icon"><Users size={32} /></div>
                <h3>Build Your Network</h3>
                <p>Follow your favorite content creators, grow your audience, and connect with other artists.</p>
            </div>

            <div className="feature-card">
                <div className="card-icon"><TrendingUp size={32} /></div>
                <h3>Discover Trends</h3>
                <p>Stay informed about rapidly evolving artistic trends and learn new techniques right away.</p>
            </div>
        </div>
    </section>
);

const Information = () => (
    <section className='information-section'>
        <div className='info-container'>
            <div><p className='sub-title'>Share Your Work</p></div>
            <div><h2 className="main-title">Your Art Deserves <br /> a <span className="action">Stage</span></h2></div>
            <div>Upload your creations in any format 2D & 3D paintings, digital art, photography, illustrations and more. Let the community discover your talent and give you the recognition you deserve.</div>
            <div>
                <div className="three">
                    <Upload size={20} color="var(--main-color)" />
                    <span>Drag & drop upload with multiple format support</span>
                </div>
                <div className="three">
                    <Maximize2 size={20} color="var(--main-color)" />
                    <span>High-resolution gallery with zoom capabilities</span>
                </div>
                <div className="three">
                    <Layers size={20} color="var(--main-color)" />
                    <span>Categorize by 3d, 2d, final, sketch etc..</span>
                </div>
            </div>
            <div>
                <button className="start-btn">Start Sharing</button>
            </div>
        </div>
        <div className='info-container'>
           <div>hfsjkdfk</div>
        </div>
    </section>

);

// --- ANA SAYFA BİRLEŞTİRME ---
function LandingPage() {
    return (
        <div className="landing-wrapper">
            <Navbar />
            <main className="landing-content">
                <Hero />
                <Features />
                <Information />
            </main>
        </div>
    );
}

export default LandingPage;