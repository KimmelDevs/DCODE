import React from 'react';

const ItemCard = ({ image, name, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-black text-lg">{name}</h3>
        <p className="text-gray-600 text-sm my-2">{description}</p>
        <p className="font-bold text-pink-500">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ItemCard;