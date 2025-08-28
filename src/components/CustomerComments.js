import React, { use, useState } from 'react';
import './CustomerComments.css'
import imagePP from '../assets/default-pp.jpg';

const CustomerComments = () => {

    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Isim Soyisim1",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 2,
            name: "Isim Soyisim2",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 3,
            name: "Isim Soyisim3",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 4,
            name: "Isim Soyisim4",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 5,
            name: "Isim Soyisim",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 6,
            name: "Isim Soyisim",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 7,
            name: "Isim Soyisim",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 8,
            name: "Isim Soyisim",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 9,
            name: "Isim Soyisim",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        },

        {
            id: 10,
            name: "Isim Soyisim",
            userImage: imagePP,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas in ipsam ab enim libero non saepe provident, ipsa minima magnam fuga veniam amet accusamus, facere quod magni? Autem, id?"
        }
    ]);

    return (
        <section className='customer-comments-container'>

            <h2>Sizden Gelenler</h2>

            <div className="carousel-wrapper">
                <button className='nav-button prev-button'>&lt;</button>

                <div className="comments-carousel">
                    {comments.map(comment => (
                        <div className="customer-comment" key={comment.id}>
                            <div className="customer-info">
                                <img src={comment.userImage} alt="{comment.name}" />
                                <h3>{comment.name}</h3>
                            </div>
                            <div className="customer-comment-text">
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carousel-dots">

                </div>

                <button className='nav-button next-button'>&gt;</button>
            </div>


        </section>
    );
}

export default CustomerComments;