import "./ProjectCard.css"

function ProjectCard ({ title, description, tools, onlineLink, repo } ) {
    return (
        <section className="project_main_container">
            <article className="title_description_container">
                <h3>{ title }</h3>
                <p>{ description }</p>
            </article>
            <article className="tools_used_container">
                <h4>Made with</h4>
                <section className="tool_container">
                    {/* This is easier to understand, but is the long way: */}
                    {/* {tools.html && <h5>{tools.html}</h5>}*/}
                    {/* This is better if I do it being focus */}
                    {
                        Object.entries(tools).map(([key, value]) => (
                            value && <h5 key={key}>{value}</h5>
                        ))
                    }
                </section>
            </article>
            <article className="view_project_container">
                <section className="view_buttons_container">
                    <ul>
                        <li>
                            <a href={ onlineLink }>View online</a>
                        </li>
                        <li>
                            <a href={ repo }>Repo on GitHub</a>
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    )
}

export default ProjectCard