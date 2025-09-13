import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/Pawfect-Home_Logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logo}/>
      </div>
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
        <NavLink to="/pets" className={({ isActive }) => isActive ? styles.active : ""}>Pets</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;