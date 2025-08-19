import React from 'react';
import './Hero.css';

import heroImageCasual from '../assets/hero-casual.jpg';
import heroImageFormal from '../assets/hero-formal.jpg';

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={heroImageCasual} alt="Gündelik erkek giyim tarzı" className="hero-image" />
            <img src={heroImageFormal} alt="Resmi erkek giyim tarzı" className="hero-image" />

            <div className="hero-content">
                <h1 className="hero-title">Tarzınıza Değer Katıyoruz</h1>
                <p className="hero-subtitle">
                    En trend erkek giyim ürünleri ile stilinizi bir üst seviyeye taşıyın.
                </p>
                <button className="hero-button">Koleksiyonu Keşfet</button>
            </div>
        </div>
    );
};

export default Hero;