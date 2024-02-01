import Layout from "./Layout"
import ProjectCard from "./ProjectCard"
import "./Projects.css"

const myProjects = [
    {
        title: "Dog's Lovers",
        description: "An app for dog lovers. Enjoy random adorable dog pictures. Save your favorites. Upload your own dog photos.",
        tools: {
            html: "HTML",
            css: "CSS",
            javaScript: "JavaScript",
        },
        onlineLink: "",
        repo: ""
    },
    {
        title: "ToDo App",
        description: "This is a straightforward to-do app, designed for practicing DOM manipulation. It utilizes a single HTML file for simplicity.",
        tools: {
            html: "HTML",
        },
        onlineLink: "",
        repo: ""
    },
]

function Projects () {
    return (
        <Layout>
            <section className="projects_main_container">
                <article>
                    <h2>My Projects</h2>
                </article>
                <section className="projects_cards_container">
                    {
                        myProjects.map(project => (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                tools={project.tools}
                                onlineLink={project.onlineLink}
                                repo={project.repo}  
                            />
                        ))
                    }
                </section>
            </section>
        </Layout>
    )
}

export default Projects