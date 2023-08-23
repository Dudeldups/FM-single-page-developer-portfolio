import "./Skills.less";
import skillsData from "../../../data/skillsData.json";

export default function Skills() {
  const allSkills = skillsData.map(skill => {
    const { name, time } = skill;
    return (
      <li key={name} className="skills__item">
        <h3 className="skills__title">{name}</h3>
        <p className="skills__exp">{time} Years Experience</p>
      </li>
    );
  });

  return (
    <>
      <hr />
      <section className="skills">
        <h2 className="sr-only">My skills</h2>
        <ul className="skills__list">{allSkills}</ul>
      </section>
      <hr />
    </>
  );
}
