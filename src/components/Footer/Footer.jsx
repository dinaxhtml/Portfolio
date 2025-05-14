import React from "react";
import styles from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerTitle}>
        Copyrights © <span>Dina Osama</span>
      </p>
      <div className={styles.socialIcons}>
        <a href="https://github.com/dinaxhtml">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/dina-sous/">
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
