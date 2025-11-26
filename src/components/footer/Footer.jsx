// src/components/footer/Footer.jsx
import styles from "./footer.module.css";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
      </div>

      <div className={styles.info}>
        <p>mail@smuk.nu</p>
        <p>+45 123 345 33</p>
      </div>
    </footer>
  );
}

export default Footer;
