import React, { useState } from "react";
import './Header.css';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-content">
                <a href="/" className="logo">AYDIN GİYİM</a>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>
            <nav className={`main-nav ${menuOpen ? 'menu-open' : ''}`}>
                <ul>
                    <li><a href="/hakkimizda">Hakkımızda</a></li>
                    <li><a href="/urunler">Ürünler</a></li>
                    <li><a href="/iletisim">İletişim</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;