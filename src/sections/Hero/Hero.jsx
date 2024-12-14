import styles from "./HeroStyle.module.css";
import heroImg from "./../../assets/raffypic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import TwitterLight from "../../assets/twitter-light.svg";
import TwitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "..//../assets/linkedin-light.svg";
import linkedinDark from "..//../assets/linkedin-dark.svg";
import CV from "../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const ThemeIcon = theme === "light" ? sun : moon;
  const TwitterIcon = theme === "light" ? TwitterLight : TwitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture for Raffy Sanchez"
        />
        <img
          className={styles.colorMode}
          src={ThemeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Raffy
          <br />
          Sanchez
        </h1>
        <h2>Front End Developer</h2>
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={TwitterIcon} alt="X Logo Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github Logo Icon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="LinkEnd Logo Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
