// src/pages/Ask.jsx
import { Link } from "react-router-dom";
import FAQ from "../components/infoSection/FAQ.jsx";
import styles from "./ask.module.css";

function Ask() {
  return (
    <div className={styles.page}>
      {/* Pink hero */}
      <header className={styles.hero}>
        <h1>SPØRG OM SUNDHED</h1>
        <p>
          Herunder har vi samlet spørgsmål og svar om hud, pleje og sundhed.
          Mangler du svar, er du altid velkommen til at kontakte os.
        </p>
      </header>

      {/* FAQ fra API'et */}
      <section className={styles.faqSection}>
        <FAQ />
      </section>

      {/* Medlems-CTA nederst, som i Figma */}
      <section className={styles.memberSection}>
        <h2>MEDLEM?</h2>
        <p>
          Vær med i kundeklubben for nye videoer, rabatter og meget mere.
        </p>
        <Link to="/join" className={styles.memberButton}>
          Bliv medlem af kundeklubben
        </Link>
      </section>
    </div>
  );
}

export default Ask;
