import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ pet }) {
  return (
    <div className={styles.card}>
      <img src={pet.image} alt={pet.name} className={styles.image} />
      <h3 className={styles.name}>{pet.name}</h3>
      <p className={styles.breed}>{pet.breed}</p>
      <Link to={`/pets/${pet.id}`} className={styles.detailsButton}>
        View Details
      </Link>
    </div>
  );
}

export default Card;
