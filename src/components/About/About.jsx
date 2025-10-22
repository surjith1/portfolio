import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <br /> <br />
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I’m a passionate Full-Stack Developer with experience in building scalable, responsive web applications using the MERN stack. I also have hands-on experience in Oracle APEX, developing secure, data-driven enterprise apps. With a background in computer science and expertise in both full-stack and low-code platforms, I deliver efficient, user-focused solutions across diverse environments.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3><i class="fa-solid fa-graduation-cap"></i> Education</h3> <br />
              <p>
                Completed "Bachelor of Technology" in Computer Science from ST. Thomas College of Engineering And Technology, Chengannur | APJ Abdul Kalam Technological University, Kerala
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
