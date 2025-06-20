import ToolCards from "./ToolCards"
import { ImHtmlFive, ImCss3 } from "react-icons/im"
import { TbBrandJavascript, TbBrandReactNative, TbBrandPython } from "react-icons/tb"
import { FaGitAlt } from "react-icons/fa6";
import { SiSqlite, SiMysql, SiFastapi } from "react-icons/si";
import { VscTerminalUbuntu } from "react-icons/vsc";
import "./Toolkit.css"


const techInfo = [
    {
        techName: "Python",
        iconImage: <TbBrandPython className="tool_icon"/>
    },
    {
        techName: "SQLite",
        iconImage: <SiSqlite className="tool_icon"/>
    },
    {
        techName: "MySQL",
        iconImage: <SiMysql className="tool_icon"/>
    },
    {
        techName: "FastAPI",
        iconImage: <SiFastapi className="tool_icon" />
    },
    {
        techName: "Git",
        iconImage: <FaGitAlt className="tool_icon"/>
    },
    {
        techName: "HTML",
        iconImage: <ImHtmlFive className="tool_icon"/>
    },
    {
        techName: "CSS3",
        iconImage: <ImCss3 className="tool_icon"/>
    },
    {
        techName: "JavaScript",
        iconImage: <TbBrandJavascript className="tool_icon"/>
    },
    {
        techName: "ReactJS",
        iconImage: <TbBrandReactNative className="tool_icon"/>
    },
    {
        techName: "Ubuntu Terminal",
        iconImage: <VscTerminalUbuntu className="tool_icon"/>
    }
]

function Toolkit () {
    return (
        <section className="toolkit_main_container">
            <article className="subtitle_paragraph_container">
                <h2 className="toolkit_subtitle">My Toolkit</h2>
                <p className="toolkit:paragraph">These are my current tools where I have some experience, and I am actively working to acquire additional skills.</p>
            </article>
            <section className="toolkit_cards_container">
                {
                    techInfo.map(tech => (
                        <ToolCards
                        key={tech.techName}
                        techName={tech.techName}
                        iconImage={tech.iconImage}
                        />
                    ))
                }
            </section>
        </section>
    )
}

export default Toolkit