import React from "react";
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
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 lg:pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<Media />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
