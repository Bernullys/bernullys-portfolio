import Layout from "./Layout"
import "./About.css"
import Toolkit from "./Toolkit"

function About () {
    return (
        <Layout>
            <Toolkit/>
            <section id="about" className="about_main_container">
                <article>
                    <h2>About me</h2>
                    <p>I am an Engineer who has been actively involved in coding since 2022. I have pursued online learning, undertaking various projects from courses as well as personal initiatives. My deep engagement with coding was solidified through the demanding yet highly satisfying CS50 courses.</p>
                </article>
            </section>
        </Layout>
    )
}

export default About