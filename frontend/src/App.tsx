// frontend/src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Media from "./pages/Media/Media";
import Listen from "./pages/Listen/Listen";
import Shows from "./pages/Shows/Shows";
import Bio from "./pages/Bio/Bio";
import Contact from "./pages/Contact/Contact";
import Store from "./pages/Store/Store";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => {
    setDrawerOpen(isOpen);
  };

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
  }, [drawerOpen]);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App min-h-screen flex flex-col">
            <Header toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
            <main className="pt-20 lg:pt-24 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/media" element={<Media />} />
                <Route path="/listen" element={<Listen />} />
                <Route path="/shows" element={<Shows />} />
                <Route path="/bio" element={<Bio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/store" element={<Store />} />
                <Route
                  path="/products/:id"
                  element={<ProductDetail toggleDrawer={toggleDrawer} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <CartDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
