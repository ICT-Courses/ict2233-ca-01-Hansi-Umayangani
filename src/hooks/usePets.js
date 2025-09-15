import { useState, useEffect } from "react";

export const usePets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPets = async () => {
        try {
        setLoading(true);
        setError(null);

        const response = await fetch("/data/pets.json"); 

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setPets(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    fetchPets();
    }, []);

  return { pets, loading, error };
};
