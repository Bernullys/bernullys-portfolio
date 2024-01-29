import Layout from "./Layout"
import ProjectCard from "./ProjectCard"
import "./Projects.css"

function Projects () {
    return (
        <Layout>
            <section className="projects_main_container">
                <article>
                    <h2>My Projects</h2>
                </article>
                <section>
                    <ProjectCard/>
                </section>
            </section>
        </Layout>
    )
}

export default Projects