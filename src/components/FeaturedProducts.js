import React, { useState, useRef } from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {

    const [products, setProducts] = useState([
        { id: 1, name: ' Product 1', price: '99.99', imageUrl: 'https://picsum.photos/id/231/200/300' },
        { id: 2, name: ' Product 2', price: '199.99', imageUrl: 'https://picsum.photos/id/232/200/300' },
        { id: 3, name: ' Product 3', price: '299.99', imageUrl: 'https://picsum.photos/id/233/200/300' },
        { id: 4, name: ' Product 4', price: '399.99', imageUrl: 'https://picsum.photos/id/234/200/300' },
        { id: 5, name: ' Product 5', price: '499.99', imageUrl: 'https://picsum.photos/id/235/200/300' },
        { id: 6, name: ' Product 6', price: '599.99', imageUrl: 'https://picsum.photos/id/236/200/300' },
        { id: 7, name: ' Product 7', price: '699.99', imageUrl: 'https://picsum.photos/id/237/200/300' },
        { id: 8, name: ' Product 8', price: '799.99', imageUrl: 'https://picsum.photos/id/238/200/300' },
        { id: 9, name: ' Product 9', price: '899.99', imageUrl: 'https://picsum.photos/id/239/200/300' },
        { id: 10, name: ' Product 10', price: '999.99', imageUrl: 'https://picsum.photos/id/240/200/300' },
    ])

    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const carousel = carouselRef.current;
        if (carousel) {
            const isMobile = window.innerWidth <= 768;
            const scrollAmount = isMobile ? 210 : 500;
            const scrollDistance = direction === 'left' ? -scrollAmount : scrollAmount;
            carousel.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        }
    };

    return (
        <section className='featured-products-container'>
            <h2>Öne Çıkan Ürünler</h2>

            <div className='carousel-wrapper'>
                <button className='nav-button prev-button' onClick={() => scroll('left')}>
                    &lt;
                </button>

                <div className="product-carousel" ref={carouselRef}>
                    {products.map(product => (
                        <a href="#" className="mini-product-card" key={product.id}>
                            <img src={product.imageUrl} alt={product.name} />
                            <div className="mini-card-info">
                                <p className="product-title">{product.name}</p>
                                <span className="product-price">{product.price}₺</span>
                            </div>
                        </a>
                    ))}
                </div>

                <button className='nav-button next-button' onClick={ () => scroll('right')}>
                    &gt;
                </button>            
            </div>

        </section>
    );
}

export default FeaturedProducts;