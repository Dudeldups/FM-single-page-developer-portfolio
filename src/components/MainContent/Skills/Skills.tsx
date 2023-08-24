import "./Skills.less";
import skillsData from "../../../data/skillsData.json";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const allSkills = skillsData.map(skill => {
    const { ref: skillRef, inView: isSkillVisible } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    const { name, time } = skill;
    return (
      <li
        key={name}
        ref={skillRef}
        className={`skills__item ${isSkillVisible && "visible"}`}>
        <h3 className="skills__title">{name}</h3>
        <p className="skills__exp">{time} Years Experience</p>
      </li>
    );
  });

  return (
    <section className="skills">
      <h2 className="sr-only">My skills</h2>
      <ul className="skills__list">{allSkills}</ul>
    </section>
  );
}
