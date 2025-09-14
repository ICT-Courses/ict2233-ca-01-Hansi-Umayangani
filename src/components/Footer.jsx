import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Brand/About */}
        <div className={styles.footerAbout}>
        <div className={styles.brand}>
            <h2>Pawfect Home</h2>
            <img
            src="src/assets/PawfectHome-Logo.png"
            alt="Pawfect Home Logo"
            className={styles.brandLogo}
            />
        </div>
        <p>
            We rescue and rehome abandoned pets to loving families.<br />
            Every pet deserves a chance at happiness and a forever home filled with love.
        </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerLinks}>
        <h4>Quick Links</h4>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pets">Available Pets</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        </div>

      </div>
      <div className={styles.footerBottom}>
        © 2025 Pawfect Home. All Rights Reserved.<br />
      </div>
    </footer>
  );
}
