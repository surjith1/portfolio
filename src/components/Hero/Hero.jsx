import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Surjith</h1>
        <p className={styles.description}>
          I'm a full-stack developer specializing in ReactJS and NodeJS, with a strong focus on building scalable and responsive web applications. Feel free to reach out — I'd love to connect!
        </p>
        <a href="mailto:surjithskumar23@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="surjith"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
