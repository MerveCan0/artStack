import './Navbar.css';
import { Globe } from 'lucide-react';
import logoIcon from "../assets/icon.png";
import { useNavigate } from 'react-router-dom'; // 1. ADIM: Import

function Navbar() {
    const navigate = useNavigate(); // 2. ADIM: Navigator'ı başlat

    return (
        <nav className='navbar'>
            <div className="nav-logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                <img src={logoIcon} alt="Logo" />
            </div>
            <ul className="nav-menu">
                <li className="nav-item"><a href="#explore">Explore</a></li>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
                <li className="nav-item neon-icon-wrapper">
                    <Globe className="neon-icon" size={20} />
                </li>
                <li className="nav-item nav-auth">
                    {/* 3. ADIM: navigate fonksiyonunu kullan (Küçük 'n' ile) */}
                    <button className="login-btn" onClick={() => navigate('/login')}>
                        Log In
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;