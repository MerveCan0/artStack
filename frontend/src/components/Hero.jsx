import "./Hero.css"
import { Sparkles, ChevronDown } from 'lucide-react';

function Hero() {
    return (
        <section className="hero-con">
            <div className="container">

                <div className="con-bor">
                    <span><Sparkles className="neon-sparkle" size={16} color={"#f74444"} /></span><span>Where artists meet the world</span>
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
}
export default Hero;