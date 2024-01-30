import "./ProjectCard.css"

function ProjectCard () {
    return (
        <section className="project_main_container">
            <article className="title_description_container">
                <h3>Dog's Lover</h3>
                <p>This is build to enjoy doggys</p>
            </article>
            <article className="tools_used_container">
                <h4>Made with</h4>
                <section className="tool_container">
                    <h5>HTML</h5>
                    <h5>CSS</h5>
                    <h5>JavaScript</h5>
                </section>
            </article>
            <article className="view_project_container">
                <section className="view_buttons_container">
                    <ul>
                        <li>
                            <a href="">View online</a>
                        </li>
                        <li>
                            <a href="">Repo on GitHub</a>
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    )
}

export default ProjectCard