// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";

import Home from "./pages/Home.jsx";
import Treatments from "./pages/Treatments.jsx";
import TreatmentDetails from "./pages/TreatmentDetails.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import Ask from "./pages/Ask.jsx";      // NY
import Join from "./pages/Join.jsx";    // NY

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:id" element={<TreatmentDetails />} />
          <Route path="/products" element={<Products />} />

          {/* Kontakt (generel) */}
          <Route path="/contact" element={<Contact />} />

          {/* Figma-sider */}
          <Route path="/ask" element={<Ask />} />
          <Route path="/join" element={<Join />} />

          <Route path="*" element={<p>Siden blev ikke fundet.</p>} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
