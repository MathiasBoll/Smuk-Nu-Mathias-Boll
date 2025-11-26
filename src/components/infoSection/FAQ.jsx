// src/components/infoSection/FAQ.jsx
import { useEffect, useState } from "react";
import { getQas } from "../../services/api";
import { toast } from "react-toastify";

function FAQ() {
  const [qas, setQas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getQas();
        setQas(data);
      } catch (err) {
        console.error(err);
        toast.error("Kunne ikke hente spørgsmål og svar");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p>Henter spørgsmål og svar...</p>;

  return (
    <section>
      <h2>Ofte stillede spørgsmål</h2>
      <ul>
        {qas.map((qa) => (
          <li key={qa._id ?? qa.id}>
            <h3>{qa.question}</h3>
            <p>{qa.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ;
