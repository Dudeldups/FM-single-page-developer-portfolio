import "./Introduction.less";

export default function Introduction() {
  return (
    <section className="introduction">
      <img
        src="/assets/images/image-profile-mobile.webp"
        alt="Adam Keyes"
        className="introduction__img"
      />
      <div className="introduction__text">
        <h1 className="introduction__title">
          Nice to meet you! I’m <span className="underline">Adam Keyes</span>.
        </h1>
        <p className="introduction__desc">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <a href="#contact" className="link-underlined">
          Contact me
        </a>
      </div>
    </section>
  );
}
