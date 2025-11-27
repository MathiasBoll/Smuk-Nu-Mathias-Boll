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
import Ask from "./pages/Ask.jsx";
import Join from "./pages/Join.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />

      {/* ALT sideindhold ligger i .pageWrapper */}
      <main>
        <div className="pageWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/treatments/:id" element={<TreatmentDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<p>Siden blev ikke fundet.</p>} />
          </Routes>
        </div>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
