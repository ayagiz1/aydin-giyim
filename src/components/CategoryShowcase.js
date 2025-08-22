import React from 'react';
import './CategoryShowcase.css';

import imageShirt from '../assets/gomlek.jpg';
import imageTshirt from '../assets/tısort.jpg';
import imageSweatshirt from '../assets/kazak.jpg';
import imageJeans from '../assets/kot-pantolon.jpg';
import imagePants from '../assets/pantolon.jpg';
import imageSuit from '../assets/takim-elbise.jpg';
import imageJacket from '../assets/ceket.jpg';
import imageCoat from '../assets/kaban.jpg';
import imageAccessory from '../assets/aksesuar.jpg';

const CategoryShowcase = () => {
    return (
        <section className="showcase-container">
            <h2 className="showcase-title">Kategoriler</h2>
            <div className="card-container">

                <div className="category-card">
                    <div className='card-image' style={{ backgroundImage: `url(${imageShirt})` }}></div>
                    <div className='card-info'>
                        <h3>Gömlek</h3>
                    </div>
                </div>

                <div className="category-card"> 
                    <div className='card-image' style={{ backgroundImage: `url(${imageTshirt})` }}></div>
                    <div className='card-info'>
                        <h3>Tişört</h3>
                    </div>
                </div>

                <div className="category-card">
                    <div className='card-image' style={{ backgroundImage: `url(${imageSweatshirt})` }}></div>
                    <div className='card-info'>
                        <h3>Kazak & Sweatshirt</h3>
                    </div>
                </div>

                <div className="category-card">
                    <div className='card-image' style={{ backgroundImage: `url(${imageJeans})` }}></div>
                    <div className='card-info'>
                        <h3>Kot Pantolon</h3>
                    </div>
                </div>

                <div className="category-card">
                    <div className='card-image' style={{ backgroundImage: `url(${imagePants})` }}></div>
                    <div className='card-info'>
                        <h3>Pantolon</h3>
                    </div>
                </div>

                <div className="category-card">
                    <div className='card-image' style={{ backgroundImage: `url(${imageSuit})` }}></div>
                    <div className='card-info'>
                        <h3>Takım Elbise</h3>
                    </div>
                </div>

                <div className="category-card">
                    <div className='card-image' style={{ backgroundImage: `url(${imageJacket})` }}></div>
                    <div className='card-info'>
                        <h3>Ceket</h3>
                    </div>
                </div>

                <div className="category-card">
                    <div className='card-image' style={{ backgroundImage: `url(${imageCoat})` }}></div>
                    <div className='card-info'>
                        <h3>Mont & Kaban</h3>
                    </div>
                </div>

                <div className="category-card">
                    <div className='card-image' style={{ backgroundImage: `url(${imageAccessory})` }}></div>
                    <div className='card-info'>
                        <h3>Aksesuar</h3>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default CategoryShowcase;