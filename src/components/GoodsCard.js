import React from 'react';

const GoodsCard = ({ photo, name, price }) => {
  return (
    <div className="goods-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>Ціна: {price}</p>
    </div>
  );
};

export default GoodsCard;