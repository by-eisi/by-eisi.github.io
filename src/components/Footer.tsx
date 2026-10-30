import { Link } from "react-router-dom";
import { STUDIO } from "../lib/motion";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          &copy; {new Date().getFullYear()} {STUDIO}
        </p>
        <nav aria-label="Rechtliches" className={styles.links}>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
