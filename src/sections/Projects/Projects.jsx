import styles from "./ProjectsStyles.module.css";
import price from "../../assets/price.jpg";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={price}
          link="https://github.com/RaffSanchez/Spending-tracker"
          h3="Spending Tracker"
          p="Your whole spending will be monitored"
        />

        {/* you can add your new project here */}
        {/* you should also imort new image */}
        {/* <ProjectCard
          src={viberr}
          link="https://github.com/RaffSanchez/Spending-tracker"
          h3="viberr"
          p="Streaming App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
