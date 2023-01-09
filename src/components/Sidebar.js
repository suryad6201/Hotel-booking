import Svgicons from "./Images";

function Nav(props) {
  return (
    <li className={props.listClass}>
      <a href="/" className="side-nav__link">
        <Svgicons iconClass="side-nav__icon" icon={props.svg} />

        <span>{props.name}</span>
      </a>
    </li>
  );
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <Nav
          svg="icon-home"
          name="Hotel"
          listClass="side-nav__item side-nav__item--active"
        />
        <Nav
          svg="icon-aircraft-take-off"
          name="Flight"
          listClass="side-nav__item"
        />
        <Nav svg="icon-key" name="Car Rental" listClass="side-nav__item" />
        <Nav svg="icon-map" name="Tours" listClass="side-nav__item" />
      </ul>

      <div className="legal">&copy; 2017 by trillo. All rights reserved.</div>
    </nav>
  );
}

export default Sidebar;
