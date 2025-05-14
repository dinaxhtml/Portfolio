import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import certificates from "../../data/certificates.json";
import { getImage  } from "../../utils";
import React from 'react'

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImage(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.certificates}>
          {certificates.map((certificate, id) => {
            return (
              <li key={id} className={styles.certificate}>
                <img
                  src={getImage(certificate.imageSrc)}
                  alt={`${certificate.organisation} Logo`}
                />
                <div className={styles.certificateDetails}>
                  <h3>{`${certificate.role}, ${certificate.organisation}`}</h3>
                  <p>{`${certificate.startDate} - ${certificate.endDate}`}</p>
                  <ul>
                    {certificate.experiences.map((experiences, id) => {
                      return <li key={id}>{experiences}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

export default Experience