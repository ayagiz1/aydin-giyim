import React from 'react';
import './Footer.css';

import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='site-footer-container'>
            <div className='footer-content'>
                <div className="footer-columns">
                    
                    <div className='footer-menu brand-menu'>
                        <h3><a href="#">AYDIN GİYİM</a></h3>
                        <a href="#">Hakkımızda</a>
                        <a href="#">İletişim</a>
                        <a href="#">Adres</a>
                        <a href="#">Gizlilik Politikası</a>
                        <a href="#">Kullanım Şartları</a>
                    </div>

                    <div className='footer-menu categories-menu'>
                        <h3>Popüler Kategoriler</h3>
                        <a href="#">Gömlek</a>
                        <a href="#">Tişört</a>
                        <a href="#">Kot Pantolon</a>
                        <a href="#">Takım Elbise</a>
                        <a href="#">Kazak & Sweatshirt</a>

                    </div>

                    <div className="footer-menu social-links">
                        <h3>Bizi Takip Edin</h3>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
                    </div>

                </div>

                <div className='footer-bottom'>
                    <p>&copy; {currentYear} AYDIN GİYİM. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;