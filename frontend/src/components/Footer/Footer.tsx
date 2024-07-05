import React from "react";

const resetAppState = () => {
  // Clear local storage
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("userPreferences");

  // Refresh the page
  window.location.reload();
};

// Add a button to trigger the reset
const ResetButton = () => {
  return (
    <button onClick={resetAppState} className="btn btn-warning">
      Reset App State
    </button>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-custom-blue text-custom-yellow py-4 bottom-0 left-0 text-center border-t-2 border-custom-yellow">
      <p className="text-sm">
        © 2024 No Elevator |{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
      </p>
      <ResetButton />
    </footer>
  );
};

export default Footer;
