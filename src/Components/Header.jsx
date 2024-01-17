import React, { useState } from "react"
import { CgMenuGridO } from "react-icons/cg"
import { TiArrowSortedDown } from "react-icons/ti"
import "./Header.css"

function Header () {
    const [bgHovered, setBgHovered] = useState(false)

    const [menuVisible, setMenuVisible] = useState(false)
    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className="header__main__container">
            <nav className="header_navbar">
                <div className="menu_logo_container">
                    <span 
                        className="icon_container"
                        onMouseEnter={() => setBgHovered(true)}
                        onMouseLeave={() => setBgHovered(false)}
                        onClick={toggleMenu}
                        >
                        {bgHovered ? (<TiArrowSortedDown className="menu_arrow_icon"/>)
                        : (<CgMenuGridO className="bg_arrow_icon" />)
                        }
                    </span>
                </div>
                <ul className={menuVisible ? "visible" : "menu_list_container"}>
                    <li>
                        <a href="">
                            <span>My projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>About me</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;