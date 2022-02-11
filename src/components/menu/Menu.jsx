import { useState } from "react";
import { Link } from "react-router-dom";


import "./menu.css";

import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const unFoldMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="nav-menu">
      <img
        className={isActive ? "under" : "over"}
        onClick={unFoldMenu}
        src={menu}
        alt="menu"
      />
      <div
        className={
          isActive ? "nav-menu-links yes-size" : "nav-menu-links no-size"
        }
      >
        <img
          src={close}
          className={!isActive ? "no-display" : ""}
          onClick={unFoldMenu}
          alt="close-menu"
        ></img>
        <ul className={!isActive ? "no-display" : ""}>
          <li>
            <Link to="/temas-dados">Iconos</Link>
          </li>
          <li>
            <Link to="/words">Palabras</Link>
          </li>
          <li>
            <Link to="/pics">Imágenes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
