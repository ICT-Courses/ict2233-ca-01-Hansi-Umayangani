import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./PetDetail.module.css";
import LoadingSpinner from "../components/LoadingSpinner";

function PetDetail() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    const fetchPet = async () => {
      try {
        await delay(500);
        const res = await fetch("/data/pets.json");
        if (!res.ok) throw new Error("Failed to load pet data");
        const data = await res.json();
        const foundPet = data.find(p => p.id.toString() === id);
        if (!foundPet) throw new Error("Pet not found");
        setPet(foundPet);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPet();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
        <h1 className={styles.name}>{pet.name}</h1>
        <img src={pet.image} alt={pet.name} className={styles.image} />
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {pet.age}</p>
        <p><strong>Description:</strong> {pet.description}</p>
    </div>
  );
}

export default PetDetail;