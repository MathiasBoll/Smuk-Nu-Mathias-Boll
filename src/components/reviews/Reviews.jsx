// src/components/reviews/Reviews.jsx
import { useEffect, useState } from "react";
import { getReviews } from "../../services/api";
import { toast } from "react-toastify";
import styles from "./reviews.module.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (err) {
        console.error(err);
        toast.error("Kunne ikke hente anmeldelser");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <section className={styles.reviews}>
        <h2>Det siger vores kunder</h2>
        <p>Henter anmeldelser...</p>
      </section>
    );
  }

  return (
    <section className={styles.reviews}>
      <h2>Det siger vores kunder</h2>

      <div className={styles.list}>
        {reviews.map((r) => (
          <div key={r._id ?? r.id} className={styles.review}>
            {r.image && (
              <img src={r.image} alt={r.name} className={styles.image} />
            )}

            <h3>{r.name}</h3>
            <p>{r.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
