import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles["contact-header"]}>
         <h1>Contact Us</h1>
            <p>
                Ready to adopt or have questions? We'd love to hear from you!
            </p>
        </section>

        {/* ---------------- Contact Details Cards ---------------- */}
        <section className={styles["contact-details"]}>
        {/* Phone Card */}
        <div className={styles["contact-card"]}>
            <img src="/icons/phone.svg" alt="Phone" className={styles["card-icon"]} />
            <h3>Phone</h3>
            <p>+94 7XXXXXXXX</p>
            <p className={styles.muted}>Mon-Sat: 9AM - 6PM</p>
            <a href="tel:+947XXXXXXX">Call Now →</a>
        </div>

        {/* Email Card */}
        <div className={styles["contact-card"]}>
            <img src="/icons/email.svg" alt="Email" className={styles["card-icon"]} />
            <h3>Email</h3>
            <p>info@pawfecthome.com</p>
            <p className={styles.muted}>Response within 24 hours</p>
            <a href="mailto:info@pawfecthome.com">Send Email →</a>
        </div>

        {/* WhatsApp Card */}
        <div className={styles["contact-card"]}>
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className={styles["card-icon"]} />
            <h3>WhatsApp</h3>
            <p>Chat with us directly for quick responses</p>
            <p className={styles.muted}>Mon-Sat: 9AM - 6PM</p>
            <a
            href="https://wa.me/947XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            >
            Start Chat →
            </a>
        </div>

        {/* Social Media Card */}
        <div className={styles["contact-card"]}>
            <img src="/icons/social.svg" alt="Social Media" className={styles["card-icon"]} />
            <h3>Social Media</h3>
            <div className={styles["social-links"]}>
            <a href="https://instagram.com/pawfecthome" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" className={styles["social-icon"]} />
            </a>
            <a href="https://facebook.com/pawfecthome" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.svg" alt="Facebook" className={styles["social-icon"]} />
            </a>
            </div>
        </div>

        {/* Large Location Card */}
        <div className={`${styles["contact-card"]} ${styles["large-card"]}`}>
            <img src="/icons/location.svg" alt="Location" className={styles["card-icon"]} />
            <h3>Visit Us</h3>
            <p>Come meet our pets and learn about adoption!</p>
            <hr />
            <div className={styles["inner-card"]}>
            <h4>Pawfect Home Shelter</h4>
            <p>123 Pet Street, Colombo, Sri Lanka</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                View on Google Maps →
            </a>
            </div>
            <div className={styles["map-embed"]}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            </div>
        </div>
        </section>

        {/* ---------------- Contact / Message Form ---------------- */}
        <section className={styles["message-form-section"]}>
          <div className={styles["review-management"]}>
            <h2>Get in Touch</h2>
            <p>Fill out the form below and we will get back to you as soon as possible.</p>
            <div className={styles["review-form-container"]}>
              <h4>Send a Message</h4>
              <form className={styles["review-form"]}>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" placeholder="Full Name *" required />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" placeholder="Email Address *" required />
                  </div>
                </div>
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="pet">Pet Interested In (Optional)</label>
                    <input type="text" id="pet" placeholder="Pet Interested In" />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="phone">Contact Number *</label>
                    <input type="tel" id="phone" placeholder="Contact Number *" required />
                  </div>
                </div>
                <div className={styles["form-group"] + " " + styles["full-width"]}>
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" placeholder="Your Message *" rows="5" required></textarea>
                </div>
                <button type="submit" className={styles["submit-btn"]}>Send Message</button>
              </form>
            </div>
          </div>
        </section>

        {/* ---------------- Adoption + FAQ Wrapper ---------------- */}
        <div className={styles["adoption-faq-wrapper"]}>
            
            {/* Adoption Process */}
            <section className={styles["adoption-process"]}>
                <h2>Adoption Process</h2>
                <ol>
                <li>Submit inquiry form</li>
                <li>Schedule meet & greet</li>
                <li>Complete adoption application</li>
                <li>Home visit (if required)</li>
                <li>Finalize adoption</li>
                </ol>
            </section>

            {/* FAQ Section */}
            <section className={styles["faq"]}>
                <h2>Frequently Asked Questions</h2>
                <div className={styles["faq-item"]}>
                <h3>What is the adoption fee?</h3>
                <p>Adoption fees vary by pet and cover vaccinations, spaying/neutering, and medical care. Contact us for details.</p>
                </div>
                <div className={styles["faq-item"]}>
                <h3>Can I meet a pet before adopting?</h3>
                <p>Yes! We encourage meet and greets to ensure a good match.</p>
                </div>
                <div className={styles["faq-item"]}>
                <h3>Do you offer training support?</h3>
                <p>Yes, we provide guidance and can recommend local trainers.</p>
                </div>
                <div className={styles["faq-item"]}>
                <h3>What if the adoption doesn't work out?</h3>
                <p>We have a return policy to ensure the pet’s wellbeing.</p>
                </div>
            </section>
            
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Contact;
