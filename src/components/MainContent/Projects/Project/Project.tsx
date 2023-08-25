import "./Project.less";
import { useInView } from "react-intersection-observer";

export default function Project({
  image,
  title,
  techStack,
  projectLink,
  codeLink,
}: ProjectsData) {
  const { ref: projectRef, inView: isProjectVisible } = useInView({
    triggerOnce: true,
    rootMargin: "20px",
  });
  const allTechUsed = techStack.map(item => (
    <li key={item} className="techstack__item">
      {item}
    </li>
  ));

  return (
    <li ref={projectRef} className={`${isProjectVisible ? "visible" : ""}`}>
      <article className="project">
        <a href="#">
          <picture>
            <source
              media="(min-width: 62.5rem)"
              srcSet={`/assets/images/thumbnail-project-${image}-large.webp`}
            />
            <img
              src={`/assets/images/thumbnail-project-${image}-small.webp`}
              alt={`a preview of the ${title} website`}
              className="project__img"
            />
          </picture>
        </a>
        <h3 className="project__title">{title}</h3>
        <ul className="techstack">{allTechUsed}</ul>
        <div className="project__links">
          <a href={projectLink} className="link-underlined">
            view project
          </a>
          <a href={codeLink} className="link-underlined">
            view code
          </a>
        </div>
      </article>
    </li>
  );
}
