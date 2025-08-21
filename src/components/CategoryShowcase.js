import React from 'react';
import './CategoryShowcase.css';

import imageShirt from '../assets/gomlek.jpg';
import imageTshirt from '../assets/tısort.jpg';
import imageSweatshirt from '../assets/kazak.jpg';
import imageJeans from '../assets/kot-pantolon.jpg';
import imageJacket from '../assets/ceket.jpg';
import imageAccessory from '../assets/aksesuar.jpg';

const CategoryShowcase = () => {
    return (
        <section className="showcase-container">
            <h2 className="showcase-title">Kategoriler</h2>
            <div className="card-container">
                <div className="category-card" style={{ backgroundImage: `url(${imageShirt})` }}><h3>Gömlek</h3></div>
                <div className="category-card" style={{ backgroundImage: `url(${imageTshirt})` }}><h3>Tişört</h3></div>
                <div className="category-card" style={{ backgroundImage: `url(${imageSweatshirt})` }}><h3>Kazak & Sweatshirt</h3></div>
                <div className="category-card" style={{ backgroundImage: `url(${imageJeans})` }}><h3>Kot Pantolon</h3></div>
                <div className="category-card"><h3>Pantolon</h3></div>
                <div className="category-card"><h3>Takım Elbise</h3></div>
                <div className="category-card" style={{ backgroundImage: `url(${imageJacket})` }}><h3>Ceket</h3></div>
                <div className="category-card"><h3>Mont & Kaban</h3></div>
                <div className="category-card" style={{ backgroundImage: `url(${imageAccessory})` }}><h3>Aksesuar</h3></div>
            </div>
        </section>
    );
}

export default CategoryShowcase;