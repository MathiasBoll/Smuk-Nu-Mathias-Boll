// src/components/navigation/Navigation.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../hooks/useCart.jsx";
import styles from "./navigation.module.css";

function formatPrice(value) {
  const number = Number(value) || 0;
  return number.toFixed(2).replace(".", ",") + " kr.";
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { items, itemsCount, removeFromCart, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (item.quantity ?? 1),
    0
  );

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function toggleCart() {
    setCartOpen((prev) => !prev);
  }

  function handleNavClick() {
    setMenuOpen(false);
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
            {/* Kurv */}
            <button
              type="button"
              className={`${styles.iconButton} ${styles.cartButton}`}
              aria-label="Kurv"
              onClick={toggleCart}
            >
              <FaShoppingBasket />
              {itemsCount > 0 && (
                <span className={styles.cartBadge}>{itemsCount}</span>
              )}
            </button>

            {/* Burger-menu */}
            <button
              type="button"
              className={styles.iconButton}
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <FaBars />
            </button>

            {/* Kurv dropdown */}
            {cartOpen && (
              <div className={styles.cartDropdown}>
                {items.length === 0 ? (
                  <p className={styles.cartEmpty}>
                    Der er ingen produkter i kurven
                  </p>
                ) : (
                  <>
                    <ul className={styles.cartList}>
                      {items.map((item) => (
                        <li key={item.id} className={styles.cartItem}>
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title}
                              className={styles.cartItemImage}
                            />
                          )}

                          <div className={styles.cartItemInfo}>
                            <div className={styles.cartItemTitle}>
                              {item.title}
                            </div>
                            <div className={styles.cartItemMeta}>
                              <span>{formatPrice(item.price)}</span>
                              <span> · {item.quantity ?? 1} stk.</span>
                            </div>
                          </div>

                          <button
                            type="button"
                            className={styles.cartRemove}
                            aria-label="Fjern fra kurv"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FaTimes />
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.cartFooter}>
                      <span className={styles.cartFooterLabel}>I alt</span>
                      <span className={styles.cartFooterTotal}>
                        {formatPrice(total)}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={styles.cartClear}
                      onClick={clearCart}
                    >
                      Tøm kurv
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation dropdown under headeren */}
      <nav
        className={`${styles.dropdown} ${
          menuOpen ? styles.dropdownOpen : ""
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
