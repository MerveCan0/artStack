import React, { useState, useEffect } from 'react'; // useEffect ekledik
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation ekledik
import { ArrowLeft } from 'lucide-react';
import "./LoginPage.css";

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation(); // Gelen paketi yakalayan dedektif

    // Varsayılan olarak login başlasın
    const [isLogin, setIsLogin] = useState(true);

    // Sayfa yüklendiğinde gelen pakete bak
    useEffect(() => {
        if (location.state && location.state.mode === 'register') {
            setIsLogin(false); // Eğer notta 'register' yazıyorsa kayıt formunu aç
        } else {
            setIsLogin(true); // Yoksa veya 'login' yazıyorsa giriş formunu aç
        }
    }, [location.state]); // Paket her değiştiğinde kontrol et

    const handleAuthAction = (e) => {
        e.preventDefault();
        alert(isLogin ? "Giriş Başarılı!" : "Kaydınız Oluşturuldu!");
        navigate('/dashboard');
    };

    return (
        <div className="login-wrapper">
            <button className="back-button" onClick={() => navigate('/')}>
                <ArrowLeft size={20} />
                <span>Back to Home</span>
            </button>

            <div className="login-card">
                <h2>{isLogin ? "Login" : "Register"}</h2>
                <form className="login-form" onSubmit={handleAuthAction}>
                    {!isLogin && (
                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                    )}
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="login-submit-btn">
                        {isLogin ? "Sign In" : "Sign Up"}
                    </button>
                </form>

                <div className="login-footer">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? " Register" : " Login"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;