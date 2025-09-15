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

      </main>
      <Footer />
    </>
  );
};

export default Contact;
