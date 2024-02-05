import "./ProjectCard.css"

function ProjectCard ({ title, description, tools, onlineLink, repo } ) {

    return (
        <section className="project_main_container">
            <section className="project_container">
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
                        <ul className="view_buttons_container_ul">
                            <li className="view_buttons_container_li">
                                <a className="view_buttons_container_a" href={ onlineLink } target="_blank" >View online</a>
                            </li>
                            <li className="view_buttons_container_li">
                                <a className="view_buttons_container_a" href={ repo } target="_blank" >Repo on GitHub</a>
                            </li>
                        </ul>
                    </section>
                </article>
            </section>
            <section className="project_card_inner_container">
                <h3 className="project_screem_title">{title}</h3>
            </section>
        </section>
    )
}

export default ProjectCard