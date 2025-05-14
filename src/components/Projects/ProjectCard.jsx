import React from "react";
import styles from "./ProjectCard.module.css";
import { getImage } from "../../utils";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img
            src={getImage(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
        </div>
        <div className={styles.projectInfo}>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            <a href={demo} className={styles.link} target="_blank">
              <OpenInNewIcon />
            </a>
            <a href={source} className={styles.link} target="_blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
