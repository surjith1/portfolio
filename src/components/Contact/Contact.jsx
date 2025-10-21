import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <i class="fa-solid fa-envelope fa-2xl fa-fade"></i>
          <a href="mailto:surjithskumar23@gmail.com">surjithskumar23@gmail.com</a>
        </li>
        <li className={styles.link}>
          <i class="fa-brands fa-linkedin fa-2xl fa-fade"></i>
          <a href="https://www.linkedin.com/in/surjithskumar">surijthskumar</a>
        </li>
        <li className={styles.link}>
          <i class="fa-brands fa-github fa-2xl fa-fade"></i>
          <a href="https://www.github.com/surjith1">surjith1</a>
        </li>
      </ul>
    </footer>
  );
};
