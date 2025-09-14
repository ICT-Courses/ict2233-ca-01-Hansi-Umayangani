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

        {/* Contact Info */}
        <div className={styles.contactInfo}>
        <h4>Contact Info</h4>
        <p>
            <img
            src="src/assets/Icons/phone.png" alt="Phone" className={styles.contactIcon}
            />
            <a href="tel:+555123PETS">(555) 123-PETS</a>
        </p>
        <p>
            <img
            src="/icons/mail.png" alt="Email" className={styles.contactIcon}
            />
            <a href="mailto:info@pawfecthome.com">info@pawfecthome.com</a>
        </p>
        <p>
            <img
            src="/icons/location.png" alt="Location" className={styles.contactIcon}
            />
            <a
            href="https://maps.google.com/?q=123+Pet+Street,+Animal+City"
            target="_blank" rel="noopener noreferrer"
            >
            123 Pet Street,<br />
            Animal City, AC 12345
            </a>
        </p>
        </div>

      </div>
      <div className={styles.footerBottom}>
        © 2025 Pawfect Home. All Rights Reserved.<br />
      </div>
    </footer>
  );
}
