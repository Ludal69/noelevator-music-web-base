import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-custom-blue text-custom-yellow py-4 bottom-0 left-0 text-center border-t-2 border-custom-yellow">
      <p className="text-sm">
        © 2024 No Elevator |{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
