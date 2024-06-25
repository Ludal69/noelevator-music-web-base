import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from "../../assets/Images/no_elevator_gf_logo.svg"; // Import correct de l'image

const Header: React.FC = () => {
  return (
    <header className="w-full bg-custom-blue text-custom-yellow fixed top-0 left-0 z-50 h-20 lg:h-24">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        <nav className="flex space-x-4 text-lg w-2/5 justify-center items-center h-full font-titles">
          <Link to="/" className="hover:underline">
            Store
          </Link>
          <Link to="/live" className="hover:underline">
            Live
          </Link>
          <Link to="/videos" className="hover:underline">
            Videos
          </Link>
        </nav>
        <div className="w-1/5 flex justify-center items-center h-full">
          <img
            src={logo}
            alt="Group Logo"
            className="inline-block h-16 lg:h-20 py-2" // Utilisation des classes Tailwind pour hauteur responsive
          />
        </div>
        <div className="flex space-x-4 w-2/5 justify-center items-center h-full">
          <SocialIcon
            url="https://facebook.com"
            style={{ height: 50, width: 50 }}
            fgColor="#ffac49"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://instagram.com"
            style={{ height: 50, width: 50 }}
            fgColor="#ffac49"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://youtube.com"
            style={{ height: 50, width: 50 }}
            fgColor="#ffac49"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://spotify.com"
            style={{ height: 50, width: 50 }}
            fgColor="#ffac49"
            bgColor="transparent"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
