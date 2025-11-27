// src/pages/Products.jsx
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { toast } from "react-toastify";
import { useCart } from "../hooks/useCart.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem, count } = useCart();

  useEffect(() => {
    async function load() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        toast.error("Kunne ikke hente produkterne");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p>Henter produkter...</p>;

  return (
    <section>
      <h1>Produkter</h1>

      <ul>
        {products.map((product) => (
          <li key={product._id ?? product.id}>
            {product.image && (
              <img src={product.image} alt={product.title} width={120} />
            )}
            <h2>{product.title}</h2>
            {product.price && <p>{product.price} kr.</p>}
            {product.description && <p>{product.description}</p>}

            <button
              type="button"
              onClick={() => {
                addItem(product);
                toast.success(
                  `Tilføjet til kurv. Du har nu ${count + 1} vare${
                    count + 1 === 1 ? "" : "r"
                  } i kurven.`
                );
              }}
            >
              KØB
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
