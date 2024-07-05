import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

interface CartDrawerProps {
  isOpen: boolean;
  toggleDrawer: (isOpen: boolean) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, toggleDrawer }) => {
  const { state } = useCart();
  const { isAuthenticated, email, logout } = useAuth();
  const navigate = useNavigate();
  const [items, setItems] = useState(state.items);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setItems(state.items);
  }, [state.items]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        toggleDrawer(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, toggleDrawer]);

  const handleLogout = () => {
    logout();
    setItems([]); // Clear local state on logout
    navigate("/"); // Redirect to home after logout
  };

  return (
    <div
      ref={drawerRef}
      className={`fixed inset-y-0 right-0 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-white w-80 p-4 shadow-lg z-50`}
    >
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`} className="mb-2">
              <strong>{item.product.title}</strong> - {item.size} - $
              {item.product.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <div className="space-y-4 mt-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="btn btn-primary">
              Identifiez-vous
            </Link>
            <br />
            <Link to="/signup" className="btn btn-secondary">
              Nouveau client ? Commencer ici.
            </Link>
          </>
        ) : (
          <>
            <p className="text-sm mb-2">Bonjour, {email}</p>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded mt-4"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
