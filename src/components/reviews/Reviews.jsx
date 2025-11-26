// src/components/reviews/Reviews.jsx
import { useEffect, useState } from "react";
import { getReviews } from "../../services/api";
import { toast } from "react-toastify";

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

  if (loading) return <p>Henter anmeldelser...</p>;

  return (
    <section>
      <h2>Det siger vores kunder</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id ?? review.id}>
            {review.image && (
              <img src={review.image} alt={review.name} width={80} />
            )}
            <h3>{review.name}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
