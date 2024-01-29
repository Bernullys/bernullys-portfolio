import "./ProjectCard.css"

function ProjectCard () {
    return (
        <section className="project_main_container">
            <article className="title_description_container">
                <h1>Dog's Lover</h1>
                <p>This is build to enjoy doggys</p>
            </article>
            <article className="tools_used_container">
                <h4>Made with</h4>
                <section className="tool_container">
                    <h5>HTML</h5>
                    <h5>JavaScript</h5>
                </section>
            </article>
            <article className="view_project_container">
                <section className="view_buttons_container">
                    <button>View online</button>
                    <button>Repo on GitHub</button>
                </section>
            </article>
        </section>
    )
}

export default ProjectCard