import React from 'react';
import GoodsCard from './GoodsCard';
import './Gallery.css';

const Gallery = () => {
  const goodsData = [
    {
      id: 1,
      name: 'Pomegranate',
      photo: 'fr(1).jpg',
      price: '50 грн',
    },
    {
      id: 2,
      name: 'Kivi',
      photo: 'fr(2).jpg',
      price: '20 грн',
    },
    {
      id: 3,
      name: 'Apple',
      photo: 'fr(3).jpg',
      price: '10 грн',
    },
    {
      id: 4,
      name: 'Pineapple',
      photo: 'fr(4).jpg',
      price: '100 грн',
    },
    {
      id: 5,
      name: 'Peach',
      photo: 'fr(5).jpg',
      price: '35 грн',
    },
    {
      id: 6,
      name: 'Orange',
      photo: 'fr(6).jpg',
      price: '25 грн',
    },
  ];

  return (
    <div className="gallery">
      {goodsData.map((item) => (
        <GoodsCard
          key={item.id}
          photo={item.photo}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Gallery;