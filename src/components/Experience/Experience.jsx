import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}><i class="fa-solid fa-laptop"></i> Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <div className={styles.historyItemDetails}>
              <h3>Oracle APEX Developer | Freelance</h3>
              <p>March 2025 – Aug 2025</p>
              <ul>
                <li>Built enterprise applications using Oracle APEX and PL/SQL.</li>
                <li>Designed interactive dashboards, reports, and workflows.</li>
                <li>Focused on performance, security, and data integrity.</li>
              </ul>
            </div>
          </li>

          <li className={styles.historyItem}>
            <div className={styles.historyItemDetails}>
              <h3>Full-Stack Developer | MERN Stack</h3>
              <p>July 2024 – Jan 2025</p>
              <ul>
                <li>Developed scalable web apps using React, Node.js, Express, and MongoDB.</li>
                <li>Built RESTful APIs and integrated third-party services.</li>
                <li>Implemented secure authentication and responsive UI components.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};