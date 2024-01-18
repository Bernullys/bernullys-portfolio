import React, { useState } from "react"
import { CgMenuGridO } from "react-icons/cg"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
import { AiOutlineClose } from "react-icons/ai"

import "./Header.css"

function Header () {

    const [bgHovered, setBgHovered] = useState(false)

    const [menuVisible, setMenuVisible] = useState(false)

    const [isUpMenuIcon, setIsUpMenuIcon] = useState(false)

    const [upMenuIconHovered, setUpMenuIconHovered] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
        setIsUpMenuIcon(!isUpMenuIcon)
    }

    return (
        <header className="header__main__container">
            <nav className="header_navbar">
                <div className="menu_logo_container">
                    <span 
                        className="icon_container"
                        onMouseEnter={() => {
                            setBgHovered(true)
                            setUpMenuIconHovered(true)}}
                        onMouseLeave={() => {
                            setBgHovered(false)
                            setUpMenuIconHovered(false)}}
                        onClick={toggleMenu}
                        >
                        {upMenuIconHovered ? (<TiArrowSortedUp className="menu_up_arrow_icon"/>) :
                        isUpMenuIcon ? (<AiOutlineClose className="menu_x_icon"/>) :
                        bgHovered ? (<TiArrowSortedDown className="menu_arrow_icon"/>)
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