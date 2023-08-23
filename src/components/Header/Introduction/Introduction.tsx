import "./Introduction.less";

export default function Introduction() {
  return (
    <section className="introduction">
      <aside className="introduction__img-container">
        <picture>
          <source
            media="(min-width: 40.625rem)"
            srcSet="/assets/images/image-profile-tablet.webp"
          />
          <img
            src="/assets/images/image-profile-mobile.webp"
            alt="Adam Keyes"
            className="introduction__img"
          />
        </picture>
      </aside>
      <div className="introduction__text">
        <h1 className="introduction__title">
          Nice to meet you! I’m <span className="underline">Adam Keyes</span>.
        </h1>
        <p className="introduction__desc">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <a href="#contact" className="contact-link">
          Contact me
        </a>
      </div>
    </section>
  );
}
