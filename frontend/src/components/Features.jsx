import "./Features.css";
import { Palette, Globe, Zap, Shield } from 'lucide-react';

function Features() {
    return (
        <section className="features-section">
            {/* Üst Kısım: 3 Katmanlı Metin */}
            <div className="features-header">
                <span className="sub-title">Platform Features</span>
                <h2 className="main-title">Everything You Need to <br /><span className="action">Thrive</span></h2>
                <p className="desc-text">A complete creative ecosystem designed for artists at every stage of their journey</p>
            </div>

            {/* Alt Kısım: 4 Kartlı Grid */}
            <div className="features-grid">
                <div className="feature-card">
                    <div className="card-icon"><Palette size={32} /></div>
                    <h3>Share Your 2D & 3D</h3>
                    <p>Display your sketches, digital paintings, and 3D models in high resolution.</p>
                </div>

                <div className="feature-card">
                    <div className="card-icon"><Globe size={32} /></div>
                    <h3>Engage & Comment</h3>
                    <p>Leave feedback, discuss techniques, and support artist through meaningful conversations.</p>
                </div>

                <div className="feature-card">
                    <div className="card-icon"><Zap size={32} /></div>
                    <h3>Build Your Network</h3>
                    <p>Follow your favorite content creators, grow your audience, and connect with other artists.</p>
                </div>

                <div className="feature-card">
                    <div className="card-icon"><Shield size={32} /></div>
                    <h3>Discover Trends</h3>
                    <p>Stay informed about rapidly evolving artistic trends and learn new techniques right away.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;