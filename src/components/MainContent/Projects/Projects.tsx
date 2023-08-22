import "./Projects.less";
import Project from "./Project/Project";
import projectsData from "../../../data/projectsData.json";

export default function Projects() {
  const allProjects = projectsData.map((project: ProjectsData) => {
    const { image, title, techStack, projectLink, codeLink } = project;
    return (
      <Project
        key={title}
        image={image}
        title={title}
        techStack={techStack}
        projectLink={projectLink}
        codeLink={codeLink}
      />
    );
  });

  return (
    <section className="projects">
      <header className="projects__header">
        <h2 className="projects__title">Projects</h2>
        <button className="contact-button">Contact me</button>
      </header>
      <ul className="projects__list">{allProjects}</ul>
    </section>
  );
}
