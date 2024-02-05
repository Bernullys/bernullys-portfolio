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
        onlineLink: "https://bernullys.github.io/Curso-Consumo-API-REST-JS/",
        repo: "https://github.com/Bernullys/Curso-Consumo-API-REST-JS"
    },
    {
        title: "ToDo App",
        description: "This is a straightforward to-do app, designed for practicing DOM manipulation. It utilizes a single HTML file for simplicity.",
        tools: {
            html: "HTML",
        },
        onlineLink: "https://bernullys.github.io/todowithjsvanilla/",
        repo: "https://github.com/Bernullys/todowithjsvanilla"
    },
    {
        title: "The Movie Data Base",
        description: "Here is where I'm applaying the most using javascript vanilla. Under the TMDB API",
        tools: {
            html: "HTML",
            css: "CSS",
            javaScript: "JavaScript",
        },
        onlineLink: "https://bernullys.github.io/Curso-Consumo-API-REST-conJS-II/",
        repo: "https://github.com/Bernullys/Curso-Consumo-API-REST-conJS-II"
    },
    {
        title: "HV Test",
        description: "This is a landing page for an enterprise named HV Test (my first paid project).",
        tools: {
            html: "HTML",
            css: "CSS",
            javaScript: "JavaScript",
            react: "React"
        },
        onlineLink: "https://bernullys.github.io/servicios",
        repo: "https://github.com/Bernullys/hvtest"
    },
    {
        title: "Ecommerce",
        description: "This is the starting project to make an ecommerce",
        tools: {
            html: "HTML",
            css: "CSS",
            javaScript: "JavaScript",
            react: "React",
            tailwind: "Tailwind"
        },
        onlineLink: "",
        repo: "https://github.com/Bernullys/Curso-Ecommerce"
    },
]

function Projects () {
    return (
        <Layout>
            <section id="myProjects" className="projects_main_container">
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