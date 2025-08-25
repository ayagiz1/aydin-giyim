import React from 'react';
import './MainContent.css';
import FeaturedProducts from './FeaturedProducts';
import Campaigns from './Campaigns';

const MainContent = () => {
    return (
        <section className='main-content-container'>
            <FeaturedProducts />
            <Campaigns />
        </section>
    );
}
export default MainContent;