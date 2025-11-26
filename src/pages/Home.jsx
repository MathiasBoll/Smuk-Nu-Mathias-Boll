// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

import Reviews from "../components/reviews/Reviews.jsx";
import FAQ from "../components/infoSection/FAQ.jsx";

import "./home.css";

function Home() {
  const [heroProduct, setHeroProduct] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const products = await getProducts();
        if (products && products.length > 0) {
          setHeroProduct(products[0]); // første produkt som header
        }
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  return (
    <>
      {/* HERO-SEKTION */}
      {heroProduct && (
        <section className="home-hero">
          {/* billedfelt – brug samme felt som i Products.jsx */}
          <img
            src={heroProduct.image}
            alt={heroProduct.name}
            className="home-hero-img"
          />

          <div className="home-hero-box">
            <h1>SKØNHED FOR ALLE</h1>
            <p>
              Herunder har vi samlet spørgsmål og svar om sundhed. Se vores
              udvalgte produkter.
            </p>
            <button className="home-hero-btn">
              Se udvalgte produkter
            </button>
          </div>
        </section>
      )}

      {/* RESTEN AF FORSIDEN */}
      <Reviews />
      <FAQ />
    </>
  );
}

export default Home;
