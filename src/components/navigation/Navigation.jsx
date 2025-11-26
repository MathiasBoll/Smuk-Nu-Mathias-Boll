// src/components/navigation/Navigation.jsx
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Smuk Nu</div>

      <nav className={styles.nav}>
        <NavLink to="/" end>
          Forside
        </NavLink>
        <NavLink to="/treatments">
          Behandlinger
        </NavLink>
        <NavLink to="/products">
          Produkter
        </NavLink>
        <NavLink to="/contact">
          Kontakt
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
