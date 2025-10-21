import React from "react";
import styles from "./Hero.module.css";
import surjith from "../../../public/Images/surjith1.png";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Hi, I'm</h3>
        <h3 className={styles.title}>
          <span className={styles.typewriter}>
            <Typewriter
              words={["Surjith S Kumar", "Full-Stack Developer", "React Developer", "Apex Developer"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>

        <p className={styles.description}>
          I'm a full-stack developer specializing in ReactJS and NodeJS, with a strong focus on building scalable and responsive web applications. Feel free to reach out — I'd love to connect!
        </p>

        <a
          href="https://www.linkedin.com/in/surjithskumar"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <img
        src={surjith}
        alt="Surjith"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};