'use client'
import { Trash2 } from 'lucide-react';

const ItemCustomized = ({ 
  item, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const calculateItemTotal = () => {
    const sizePrice = {
      small: 0,
      medium: 0.50,
      large: 1.00,
      xl: 1.50
    }[item.size];
    
    const toppingsTotal = item.toppings.length * 0.50;
    return (item.price + sizePrice + toppingsTotal) * item.quantity;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex gap-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <button 
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="mt-2 text-sm text-gray-600">
            <p>Size: {item.size.charAt(0).toUpperCase() + item.size.slice(1)}</p>
            <p>Sweetness: {item.sweetness}%</p>
            {item.toppings.length > 0 && (
              <p>Toppings: {item.toppings.join(', ')}</p>
            )}
          </div>

          <div className="mt-3 flex items-center">
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              -
            </button>
            <span className="mx-3 w-8 text-center">{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
            <span className="ml-auto font-medium">
              ${calculateItemTotal().toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCustomized;