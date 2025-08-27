import React, { useState } from 'react';
import './Campaigns.css';

import {FaTag, FaTruck, FaGift, FaSun} from 'react-icons/fa'
import { FaShirt } from 'react-icons/fa6';

const Campaigns = () => {

    const [campaigns, setCampaigns] = useState([
        { id: 1, title: 'Seçili Kot Pantolonlar 750₺ Yerine Yalnızca 400₺', date: '2025-07-01', icon: FaTag },
        { id: 2, title: 'Üç Al, Bir Bedava! Tüm Ürünlerde Geçerli', date: '2025-06-05', icon: FaGift },
        { id: 3, title: 'Yaz İndirimleri Başladı! %30’a Varan İndirimler', date: '2025-06-01', icon: FaTruck },
        { id: 4, title: 'Tişörtlerde %20 İndirim!', date: '2025-06-15', icon: FaShirt },
        { id: 5, title: 'Yazlık Ürünlerde %15 İndirim!', date: '2025-06-20', icon: FaSun }
    ])

    return (
        <section className='campaigns-container'>
            <h2>Kampanyalar</h2>
            
            <ul className='campaign-list'>
                {campaigns.map(campaign => {
                const Icon = campaign.icon;
                return (
                    <li className='campaign-item' key={campaign.id}>
                        <Icon className='campaign-icon'/>
                        <div className="campaign-text">
                            <span className='campaign-title'>{campaign.title}</span>
                            <span className='campaign-date'>{campaign.date}</span>
                        </div>
                    </li>
                );
            })}
            </ul>

        </section>
    );
}

export default Campaigns;
