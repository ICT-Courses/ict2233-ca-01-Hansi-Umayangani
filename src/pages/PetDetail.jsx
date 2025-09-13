import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./PetDetail.module.css";
import LoadingSpinner from "../components/LoadingSpinner";

function PetDetail() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <div className={styles.container}></div>
  );
}

export default PetDetail;