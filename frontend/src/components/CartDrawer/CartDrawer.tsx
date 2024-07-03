import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useCart } from "../../context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  toggleDrawer: (isOpen: boolean) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, toggleDrawer }) => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      <div className="w-80 p-4">
        <h2 className="text-xl font-bold mb-2">Cart Items</h2>
        {state.items.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <ul>
            {state.items.map((item) => (
              <li key={item.id} className="mb-2">
                <div className="flex justify-between">
                  <span>
                    <strong>{item.title}</strong> - {item.size} - ${item.price}{" "}
                    x {item.quantity}
                  </span>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SwipeableDrawer>
  );
};

export default CartDrawer;
