import { User1, Logo } from "./Images";
import Svgicons from "./Images";

function Header() {
  return (
    <>
      <header className="header">
        <img src={Logo} alt="Trillo" className="logo" />
        {/* Form for search */}
        <form action="/" class="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels"
          />

          <button className="search__button">
            <Svgicons iconClass="search__icon" icon="icon-magnifying-glass" />
          </button>
        </form>

        {/* ---Navigation icons--- */}

        <nav className="user-nav">
          {/* ---bookmark */}
          <div className="user-nav__icon-box">
            <Svgicons iconClass="user-nav__icon" icon="icon-chat" />
            <span class="user-nav__notification">7</span>
          </div>

          {/* ---chat */}
          <div className="user-nav__icon-box">
            <Svgicons iconClass="user-nav__icon" icon="icon-bookmark" />
            <span class="user-nav__notification">13</span>
          </div>
          {/* ---user */}
          <div class="user-nav__user">
            <img src={User1} alt="User" class="user-nav__user-photo" />
            <span class="user-nav__user-name">Surya</span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
