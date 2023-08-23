import "./MainContent.less";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function MainContent() {
  return (
    <main>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
