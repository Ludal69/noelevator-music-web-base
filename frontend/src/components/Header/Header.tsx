// frontend/src/components/Header/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/Images/no_elevator_gf_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  toggleDrawer: (isOpen: boolean) => void;
  drawerOpen: boolean; // Add drawerOpen prop to check the drawer state
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer, drawerOpen }) => {
  const { state } = useCart();
  const cartItemCount = state.items.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <header className="w-full bg-custom-blue text-custom-yellow fixed top-0 left-0 z-50 h-20 lg:h-24 border-b-2 border-custom-yellow">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        <nav className="flex space-x-4 text-lg w-2/5 justify-center items-center h-full font-titles">
          <Link to="/listen" className="hover:underline">
            Listen
          </Link>
          <Link to="/shows" className="hover:underline">
            Shows
          </Link>
          <Link to="/store" className="hover:underline">
            Store
          </Link>
          <Link to="/bio" className="hover:underline">
            Bio
          </Link>
          <Link to="/media" className="hover:underline">
            Media
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <div className="w-1/5 flex justify-center items-center h-full font-logo">
          <Link to="/">
            <img
              src={logo}
              alt="Group Logo"
              className="inline-block h-16 lg:h-20 py-2"
            />
          </Link>
        </div>
        <div className="flex space-x-4 w-2/5 justify-center items-center h-full">
          <div>
            <SocialIcon
              url="https://facebook.com"
              style={{ height: 50, width: 50 }}
              fgColor="#ffac49"
              bgColor="transparent"
            />
          </div>
          <div>
            <SocialIcon
              url="https://instagram.com"
              style={{ height: 50, width: 50 }}
              fgColor="#ffac49"
              bgColor="transparent"
            />
          </div>
          <div>
            <SocialIcon
              url="https://twitch.tv"
              style={{ height: 50, width: 50 }}
              fgColor="#ffac49"
              bgColor="transparent"
            />
          </div>
          <div>
            <SocialIcon
              url="https://tiktok.com"
              style={{ height: 50, width: 50 }}
              fgColor="#ffac49"
              bgColor="transparent"
            />
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <button
            onClick={() => toggleDrawer(!drawerOpen)} // Toggle drawer based on current state
            className="relative text-xl focus:outline-none"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
