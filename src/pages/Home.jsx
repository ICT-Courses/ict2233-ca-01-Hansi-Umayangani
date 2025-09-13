import styles from "./Home.module.css";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function Home() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    const fetchPets = async () => {
      try {
        await delay(500);
        const res = await fetch("/data/pets.json");
        if (!res.ok) throw new Error("Failed to load pets data");
        const data = await res.json();
        setPets(data.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
          </div>
          <h1 className={styles.heroTitle}>Find Your Pawfect Companion Today!</h1>
          <p className={styles.heroDescription}>
            We rescue and rehome abandoned pets to loving families.
          </p>
          <div className={styles.heroButtons}>
            <a href="/pets" className={`${styles.btn} ${styles.btnPrimary}`}>View Available Pets</a>
            <a href="/about" className={`${styles.btn} ${styles.btnOutline}`}>For More Details</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;