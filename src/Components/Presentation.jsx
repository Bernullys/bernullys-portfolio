import { FaHandPeace } from "react-icons/fa6"
import { GiCrystalGrowth } from "react-icons/gi"

import "./Presentation.css"


const Presentation = ( { name }) => {

    return (
        <section className="presentation_main_container">
            <article className="name_paragraph_container">
                <div className="name_container">
                    <h1>Hello! I'm { name }. </h1>
                    <FaHandPeace className="peace_icon"/>
                </div>
                <div className="paragraph_container">
                    <p>
                        Versatile programmer dedicated to continual learning, adept at navigating diverse tech landscapes, and passionate about delivering innovative solutions to complex challenges. 
                    <GiCrystalGrowth className="grow_icon"/>
                    </p>
                </div>
            </article>
        </section>
    )
}

export default Presentation
