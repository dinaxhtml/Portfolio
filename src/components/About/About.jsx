import styles from "./About.module.css";
import React from "react";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <svg
              style={{
                width: "70px",
                marginRight: "20px",
                marginLeft: "10px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#1e1e1e"
                d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 288L64 352 64 64l448 0z"
              />
            </svg>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                sites using React.js, Bootstrap css, Tailwind css.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "70px",
                marginRight: "20px",
                marginLeft: "10px",
              }}
              viewBox="0 0 512 512"
            >
              <path
                fill="#1e1e1e"
                d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
              />
            </svg>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing back-end systems and APIs using
                Node.js, Express.js, SQL [MySQL & PostgreSQL], prisma ORM.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
