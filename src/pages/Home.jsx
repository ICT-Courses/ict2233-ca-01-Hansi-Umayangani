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
        setPets(data.slice(0, 4));
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

        {/* Mission Section */}
        <section className={styles.missionSection}>
            <div className={styles.container}>
            <div className={styles.missionGrid}>
                <div>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.missionText}>
                    We believe every pet deserves love, care, and a family to call their own.
                </p>
                <div className={styles.missionSteps}>
                    <div className={styles.step}>
                    <div className={`${styles.stepIcon} ${styles.rescueIcon}`}></div>
                    <h3>Rescue</h3>
                    <p>We rescue abandoned pets with medical care.</p>
                    </div>
                    <div className={styles.step}>
                    <div className={`${styles.stepIcon} ${styles.rehabilitateIcon}`}></div>
                    <h3>Rehabilitate</h3>
                    <p>We provide loving care and training.</p>
                    </div>
                    <div className={styles.step}>
                    <div className={`${styles.stepIcon} ${styles.rehomeIcon}`}></div>
                    <h3>Rehome</h3>
                    <p>We match pets with loving families.</p>
                    </div>
                </div>
                </div>
                <div className={styles.missionImage}>
                <img src="" alt="Happy Pets"/>
                </div>
            </div>
            </div>
        </section>
    
        {/* Featured Pets Section */}
        <section className={styles.featuredPetsSection}>
            <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured Pets</h2>
            {loading && <LoadingSpinner />}
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.petsGrid}>
                {pets.map(pet => <Card key={pet.id} pet={pet} />)}
            </div>
            </div>
        </section>

    </div>
  );
}

export default Home;