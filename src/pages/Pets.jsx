import { useState } from "react";
import { usePets } from "../hooks/usePets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Pets.module.css";

const Pets = () => {
  const { pets, loading, error } = usePets();
  const [filter, setFilter] = useState("all");

const filteredPets =
  filter === "all" ? pets : pets.filter((pet) => pet.type.toLowerCase() === filter);


  return (
    <>

      {/* Page Title Section */}
      <section className={styles.headerSection}>
        <div className={styles.sectionContainer}>
          <h1>Available Pets</h1>
          <p>
            Meet our wonderful pets who are looking for their forever homes. <br />
            Each one has a unique personality and is ready to bring joy to your family.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.sectionContainer}>
          <h2>Find Your Pet</h2>
          <div className={styles.filterBar}>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("dog")}>Dogs</button>
            <button onClick={() => setFilter("cat")}>Cats</button>
            <button onClick={() => setFilter("guinea pig")}>Guinea Pigs</button>
          </div>
        </div>
      </section>

      {/* Pets Grid */}
      <section className={styles.petsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.petsGrid}>
            {filteredPets.map((pet) => (
              <div key={pet.id} className={styles.petCard}>
                {/* Image on Left */}
                <div className={styles.imageWrapper}>
                  <img src={pet.image} alt={pet.name} className={styles.petImage} />
                  <span className={styles.petType}>{pet.type}</span>
                </div>

                {/* Info on Right */}
                <div className={styles.petInfo}>
                  <h3>{pet.name}</h3>
                  <p><strong>Type:</strong> {pet.type}</p>
                  <p><strong>Age:</strong> {pet.age}</p>
                  <p><strong>Breed:</strong> {pet.breed}</p>
                  {pet.description && (
                    <p className={styles.description}>{pet.description}</p>
                  )}
                  {pet.details && (
                    <p className={styles.details}>{pet.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default Pets;
