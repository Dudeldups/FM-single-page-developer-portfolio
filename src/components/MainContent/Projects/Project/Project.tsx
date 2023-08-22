import "./Project.less";

export default function Project({
  image,
  title,
  techStack,
  projectLink,
  codeLink,
}: ProjectsData) {
  const allTechUsed = techStack.map(item => (
    <li key={item} className="techstack__item">
      {item}
    </li>
  ));

  return (
    <li>
      <article className="project">
        <img
          src={`/assets/images/thumbnail-project-${image}-large.webp`}
          alt={`a preview of the ${title} website`}
          className="project__img"
        />
        <h3 className="project__title">{title}</h3>
        <ul className="techstack">{allTechUsed}</ul>
        <div className="project__links">
          <a href={projectLink}>view project</a>
          <a href={codeLink}>view code</a>
        </div>
      </article>
    </li>
  );
}
