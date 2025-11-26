// src/components/Pageheader/PageHeader.jsx
import heroImg from "../../assets/hero.jpg";
import styles from "./pageHeader.module.css";

/**
 * variant:
 *  - "pink"  (forside, spørgom)
 *  - "white" (bliv medlem)
 *  - "dark"  (produkter)
 */
function PageHeader({ title, subtitle, buttonText, onButtonClick, variant = "pink" }) {
  return (
    <header className={`${styles.wrapper} ${styles[variant]}`}>
      <img src={heroImg} alt="" className={styles.image} />

      <div className={styles.box}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}

        {buttonText && (
          <button className={styles.button} onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </header>
  );
}

export default PageHeader;
