import { useState } from "react";
import { Link } from "react-router-dom";

import "./menu.css";

// import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const unFoldMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <nav
        className={isActive ? "nav-menu moon-active" : "nav-menu "}
        onClick={unFoldMenu}
      ></nav>
      <div
        className={
          isActive ? "nav-menu-links yes-size" : "nav-menu-links no-size"
        }
      >
        <ul className={isActive ? "" : "no-opacity"}>
          <li>
            <Link to="/temas-dados" onClick={unFoldMenu}>
              Iconos
            </Link>
          </li>
          <li>
            <Link to="/words" onClick={unFoldMenu}>
              Palabras
            </Link>
          </li>
          <li>
            <Link to="/pics" onClick={unFoldMenu}>
              Imágenes
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
