import React from "react";
import { useCart } from "../../context/CartContext";

const CartDisplay: React.FC = () => {
  const { state } = useCart();

  return (
    <div className="p-4 bg-gray-900 text-white rounded">
      <h2 className="text-xl font-bold mb-2">Cart Items</h2>
      {state.items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id} className="mb-2">
              <strong>{item.product.title}</strong> - {item.size} - $
              {item.product.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDisplay;
