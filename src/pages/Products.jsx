// src/pages/Products.jsx
import { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader.jsx";
import { getProducts } from "../services/api";
import { useCart } from "../hooks/useCart";
import styles from "./products.module.css";

function Products() {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Kunne ikke hente produkterne", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p className={styles.loading}>Henter produkter...</p>;

  return (
    <>
      <PageHeader
        variant="dark"
        title="SKØNNE PRODUKTER"
        subtitle="Herunder finder du alle vores produkter."
      />

      {/* Hele produktsiden */}
      <section className={styles.products}>
        <ul className={styles.list}>
          {products.map((product) => (
            <li
              key={product._id ?? product.id}
              className={styles.item}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.image}
                />
              )}

              <div className={styles.info}>
                <h2>{product.title}</h2>
                {product.price && (
                  <p className={styles.price}>{product.price} kr.</p>
                )}
                {product.description && (
                  <p className={styles.description}>
                    {product.description}
                  </p>
                )}
              </div>

              <button
                type="button"
                className={styles.buyButton}
                onClick={() => addItem(product)}
              >
                KØB
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Products;
