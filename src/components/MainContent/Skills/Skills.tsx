import "./Skills.less";

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="sr-only">My skills</h2>
      <ul className="skills__list">
        <li className="skills__item">
          <h3 className="skills__title">HTML</h3>
          <p className="skills__exp">4 Years Experience</p>
        </li>
        <li className="skills__item">
          <h3 className="skills__title">CSS</h3>
          <p className="skills__exp">4 Years Experience</p>
        </li>
        <li className="skills__item">
          <h3 className="skills__title">Javascript</h3>
          <p className="skills__exp">4 Years Experience</p>
        </li>
        <li className="skills__item">
          <h3 className="skills__title">Accessibility</h3>
          <p className="skills__exp">4 Years Experience</p>
        </li>
        <li className="skills__item">
          <h3 className="skills__title">React</h3>
          <p className="skills__exp">3 Years Experience</p>
        </li>
        <li className="skills__item">
          <h3 className="skills__title">Sass</h3>
          <p className="skills__exp">3 Years Experience</p>
        </li>
      </ul>
    </section>
  );
}
