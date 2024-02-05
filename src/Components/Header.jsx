import React, { useState } from "react"
import { CgMenuGridO } from "react-icons/cg"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"
import { AiOutlineClose } from "react-icons/ai"
import Presentation from "./Presentation"
import Layout from "./Layout"
import "./Header.css"

function Header () {

    const [bgIconHovered, setBgIconHovered] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
    const [upMenuIconHovered, setUpMenuIconHovered] = useState(false)

    let menuIcon = <CgMenuGridO/>
    if (bgIconHovered) {
        menuIcon = <TiArrowSortedDown/>
    }
    if (menuVisible) {
        if (upMenuIconHovered){
            menuIcon = <TiArrowSortedUp/>
        } else {
            menuIcon = <AiOutlineClose/>
        }
    }
    
    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    const name = "Bernardo"

    return (
        <Layout>
            <header className="header__main__container">
                <nav className="header_navbar">
                    <div className="menu_logo_container">
                        <span
                            onMouseEnter = {() => {
                                setBgIconHovered(true)
                                setUpMenuIconHovered(true)
                            }}
                            onMouseLeave={() => {
                                setBgIconHovered(false)
                                setUpMenuIconHovered(false)
                            }}
                            onClick={toggleMenu}
                            >
                            { menuIcon }
                        </span>
                    </div>
                    <section className={menuVisible ? "menu_main_container active" : "menu_main_container"}>
                        <ul className={menuVisible ? "visible" : "desapear"}>
                            <li>
                                <a className="menu_action" href="#myProjects" onClick={toggleMenu}>
                                    <span className="menu_span">My projects</span>
                                </a>
                            </li>
                            <li>
                                <a className="menu_action" href="#about" onClick={toggleMenu}>
                                    <span className="menu_span">About me</span>
                                </a>
                            </li>
                            <li>
                                <a className="menu_action" href="#contact" onClick={toggleMenu}>
                                    <span className="menu_span">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </section>

                    <Presentation name = {name} />
                    
                </nav>

                <section className="signal_to_keep_down">
                    <TiArrowSortedDown/>
                </section>

            </header>
        </Layout>
    )
}

export default Header