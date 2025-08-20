import React from 'react';
import './Hero.css';

import heroImageCasual from '../assets/hero-casual.jpg';
import heroImageFormal from '../assets/hero-formal.jpg';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className='hero-panel'>
                <img src={heroImageCasual} alt="Gündelik erkek giyim tarzı" className="hero-image" />
                <div className="hero-content">
                    <h1 className="hero-title">Tarzınıza Değer Katıyoruz</h1>
                    <p className="hero-subtitle">
                        En trend erkek giyim ürünleri ile stilinizi bir üst seviyeye taşıyın.
                    </p>
                    <button className="hero-button">Tarzını Keşfet</button>
                </div>
            </div>  

            <div className='hero-panel'>
            <img src={heroImageFormal} alt="Resmi erkek giyim tarzı" className="hero-image" />
                <div className="hero-content">
                    <h1 className='hero-title'>Özel Günlerde Gözler Üzerinizde Olsun</h1>
                    <p className='hero-subtitle'>
                        Şıklığınızı tamamlayacak birbirinden eşsiz takımlarımıza göz atın.
                    </p>
                    <button className="hero-button">Tarzını Keşfet</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;