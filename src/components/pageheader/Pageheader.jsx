// src/components/Pageheader/PageHeader.jsx
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.jpg";
import styles from "./pageHeader.module.css";

/**
 * variant:
 *  - "pink"  (forside, spørgom)
 *  - "white" (bliv medlem)
 *  - "dark"  (produkter)
 */
function PageHeader({
  title,
  subtitle,
  buttonText,
  buttonLink,
  onButtonClick,
  variant = "pink",
}) {
  return (
    <header className={`${styles.wrapper} ${styles[variant]}`}>
      <img src={heroImg} alt="" className={styles.image} />

      <div className={styles.box}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}

        {/* Hvis buttonLink gives → brug Link  
            Ellers → brug gamle onButtonClick */}
        {buttonText && (
          buttonLink ? (
            <Link to={buttonLink} className={styles.button}>
              {buttonText}
            </Link>
          ) : (
            <button className={styles.button} onClick={onButtonClick}>
              {buttonText}
            </button>
          )
        )}
      </div>
    </header>
  );
}

export default PageHeader;
