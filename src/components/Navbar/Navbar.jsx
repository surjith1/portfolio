import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <a className={styles.title} href="/">
          Surjith
        </a>
        <i
          className={`fa-solid fa-bars fa-2xl ${styles.menuIcon}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  );
};