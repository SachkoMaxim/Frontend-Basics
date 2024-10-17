import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <button className="navbar-toggle" onClick={toggleMenu} title="Відкрий мене">
                &#9776; {/* Символ гамбургера */}
            </button>
            <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
                <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/" className="navbar-link" onClick={toggleMenu} title="Перейти на головну сторінку з інформацією про автора">Домашня сторінка</Link>
                </li>
                <li className={`navbar-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
                    <Link to="/gallery" className="navbar-link" onClick={toggleMenu} title="Перейти до галереї товарів">Галерея</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
