// src/components/navigation/Navigation.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBasket, FaBars } from "react-icons/fa";
import { useCart } from "../../hooks/useCart.jsx";
import styles from "./navigation.module.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { count } = useCart(); // antal varer i kurven

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleNavClick() {
    // Luk menuen, når man klikker på et link
    setIsOpen(false);
  }

  function handleCartClick() {
    // Lige nu bare en lille feedback – selve kurv-siden kan laves senere
    // Du kan evt. åbne et modal eller en /cart-side her.
    if (count === 0) {
      alert("Din kurv er tom.");
    } else {
      alert(`Du har ${count} vare${count === 1 ? "" : "r"} i kurven.`);
    }
  }

  return (
    <>
      {/* Top-bar */}
      <header className={styles.nav}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMain}>Smuk.</span>
            <span className={styles.logoAccent}>Nu</span>
          </Link>

          {/* Ikoner til højre */}
          <div className={styles.icons}>
            <button
              className={styles.iconButton}
              aria-label="Kurv"
              onClick={handleCartClick}
            >
              <FaShoppingBasket />
              {count > 0 && (
                <span className={styles.cartBadge}>{count}</span>
              )}
            </button>

            <button
              className={styles.iconButton}
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown-menu – ligger UNDER headeren */}
      <nav
        className={`${styles.dropdown} ${
          isOpen ? styles.dropdownOpen : ""
        }`}
      >
        <ul className={styles.menuList}>
          <li>
            <NavLink to="/" onClick={handleNavClick}>
              Forsiden
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={handleNavClick}>
              Vores produkter
            </NavLink>
          </li>
          <li>
            <NavLink to="/ask" onClick={handleNavClick}>
              Spørg om sundhed
            </NavLink>
          </li>
          <li>
            <NavLink to="/join" onClick={handleNavClick}>
              Bliv medlem
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
