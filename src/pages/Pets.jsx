import { useState } from "react";
import { usePets } from "../hooks/usePets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Pets.module.css";

const Pets = () => {
  const { pets, loading, error } = usePets();
  const [filter, setFilter] = useState("all");

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

    </>
  );
};

export default Pets;
