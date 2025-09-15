import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import dogGif from "../assets/golden-retriever.gif";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Oops! This pup got lost...</h2>
      <p>Looks like the page you're sniffing for doesn’t exist.</p>
      <Link to="/" className={styles.homeLink}>TAKE ME HOME</Link>
    </div>
  );
};

export default NotFound;
