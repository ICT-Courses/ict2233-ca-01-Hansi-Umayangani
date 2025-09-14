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
        
      </div>
      <div className={styles.footerBottom}>
        © 2025 Pawfect Home. All Rights Reserved.<br />
      </div>
    </footer>
  );
}
