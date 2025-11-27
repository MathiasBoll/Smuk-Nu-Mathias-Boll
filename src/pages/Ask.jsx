// src/pages/Ask.jsx
import { Link } from "react-router-dom";
import FAQ from "../components/infoSection/FAQ.jsx";
import PageHeader from "../components/pageheader/PageHeader.jsx";
import styles from "./ask.module.css";

function Ask() {
  return (
    <>
      {/* Hero med billede og pink boks */}
      <PageHeader
        variant="pink"
        title="SPØRG OM SUNDHED"
        subtitle="Herunder har vi samlet spørgsmål og svar om hud, pleje og sundhed. Mangler du svar, er du altid velkommen til at kontakte os."
      />

      {/* Resten af siden */}
      <main className={styles.page}>
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
      </main>
    </>
  );
}

export default Ask;
