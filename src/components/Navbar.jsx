import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/PawfectHome-Logo.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

      const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      };

    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logo}/>
        </div>

        {/* Toggle Menu Icon */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Links */}
        <div className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.active : ""} 
            onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? styles.active : ""} 
            onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink 
            to="/pets" 
            className={({ isActive }) => isActive ? styles.active : ""} 
            onClick={() => setMenuOpen(false)}>Pets</NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? styles.active : ""} 
            onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      </nav>
    );
  }


export default Navbar;