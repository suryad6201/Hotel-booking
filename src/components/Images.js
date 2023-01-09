import User from "../assets/img/user.jpg";
import User1 from "../assets/img/user-1.jpg";
import User2 from "../assets/img/user-2.jpg";
import User4 from "../assets/img/user-4.jpg";
import User3 from "../assets/img/user-3.jpg";
import User5 from "../assets/img/user-5.jpg";
import User6 from "../assets/img/user-6.jpg";
import Logo from "../assets/img/logo.png";
import Hotel1 from "../assets/img/hotel-1.jpg";
import Hotel2 from "../assets/img/hotel-2.jpg";
import Hotel3 from "../assets/img/hotel-3.jpg";

import Svgs from "../assets/img/sprite.svg";

function Svgicons(props) {
  return (
    <svg className={props.iconClass}>
      <use href={`${Svgs}#${props.icon}`}></use>
    </svg>
  );
}

export default Svgicons;
export {
  User,
  User1,
  User2,
  User3,
  User4,
  User5,
  User6,
  Logo,
  Hotel1,
  Hotel2,
  Hotel3,
};
