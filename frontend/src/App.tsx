import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Videos from "./pages/Videos/Videos";
// import Listen from "./pages/Listen/Listen";
// import Shows from "./pages/Shows/Shows";
// import Store from "./pages/Store/Store";
// import Bio from "./pages/Bio/Bio";
// import Photos from "./pages/Media/Photos";
// import Contact from "./pages/Contact/Contact";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 lg:pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            {/* <Route path="/listen" element={<Listen />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/store" element={<Store />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
