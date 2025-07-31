import Layout from "./Layout"
import "./About.css"
import Toolkit from "./Toolkit"

import resumeSpanish from "../../public/assets/Bernardo Dávila CV Resume (ES).pdf";
import resumeEnglish from "../../public/assets/Bernardo Dávila CV Resume (EN).pdf";

function About () {
    return (
        <Layout>
            <Toolkit/>
            <section id="about" className="about_main_container">
                <article>
                    <h2>About me</h2>
                    <p>I am an Engineer who has been actively involved in coding since 2022. I have pursued online learning, undertaking various projects from courses as well as personal initiatives. My deep engagement with coding was solidified through the demanding yet highly satisfying CS50 courses.</p>
                    <h3>My Resume</h3>
                    <a className="resume-link" href={resumeEnglish} target="_blank" rel="noopener noreferrer">Bernardo Dávila CV Resume (EN)</a><br />
                    <a className="resume-link" href={resumeSpanish} target="_blank" rel="noopener noreferrer">Bernardo Dávila CV Resume (ES)</a>
                </article>
            </section>
        </Layout>
    )
}

export default About