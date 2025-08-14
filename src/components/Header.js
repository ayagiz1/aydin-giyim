import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-content">
                AYDIN GİYİM
            </div>
            <span className="header-separator">|</span>
            <nav className="main-nav">
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