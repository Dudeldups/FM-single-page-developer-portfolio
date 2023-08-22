import "./Navbar.less";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav__link">
        <p className="nav__name">adamkeyes</p>
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            <img
              src="/assets/images/icon-github.svg"
              alt="github"
              className="nav__logo"
            />
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <img
              src="/assets/images/icon-frontend-mentor.svg"
              alt="frontend mentor"
              className="nav__logo"
            />
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <img
              src="/assets/images/icon-linkedin.svg"
              alt="linkedin"
              className="nav__logo"
            />
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <img
              src="/assets/images/icon-twitter.svg"
              alt="twitter"
              className="nav__logo"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
