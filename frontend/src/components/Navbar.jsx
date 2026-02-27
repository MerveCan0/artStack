import './Navbar.css';
import { Globe } from 'lucide-react'; // İkonu içeri al
import logoIcon from "../assets/icon.png"; // Dosya yolunun doğruluğundan emin ol

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="nav-logo"><img src={logoIcon} alt="" /></div>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="#explore">Explore</a>
                </li>
                <li className="nav-item">
                    <a href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a href="#contact">Contact</a>
                </li>
                <li className="nav-item neon-icon-wrapper">
                    <Globe className="neon-icon" size={20} />
                </li>
                <li className="nav-item nav-auth">
                    <button className="login-btn">Log In</button>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;