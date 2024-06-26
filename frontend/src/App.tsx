import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Media from "./pages/Media/Media";
import Listen from "./pages/Listen/Listen";
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
