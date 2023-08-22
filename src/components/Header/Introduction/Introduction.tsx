import "./Introduction.less";

export default function Introduction() {
  return (
    <section className="introduction">
      <aside>
        <picture>
          <source
            media="(min-width: 37.5rem)"
            srcSet="/assets/images/image-profile-tablet.webp"
          />
          <img
            src="/assets/images/image-profile-mobile.webp"
            alt="Adam Keyes"
          />
        </picture>
      </aside>
      <div className="introduction__text">
        <h1 className="introduction__title">
          Nice to meet you! I’m Adam Keyes.
        </h1>
        <p className="introduction__desc">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <button className="contact-button">Contact me</button>
      </div>
    </section>
  );
}
