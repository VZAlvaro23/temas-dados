import "./menu.css";

import menu from "../../assets/menu.png";

const Menu = () => {
    return (
        <button className="nav-menu">
            <img src = {menu} alt = "menu"/>
        </button>
    );
}

export default Menu;