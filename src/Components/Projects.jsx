import ProjectCard from "./ProjectCard"
import "./Projects.css"

const myProjects = [
    {
        title: "MLRental Spa",
        description: "MLRental Spa is a company dedicated to the rental of specialized equipment for measuring electrical parameters in power systems.",
        tools: {
            html: "HTML",
            css: "CSS",
            javaScript: "JavaScript",
            react: "React"
        },
        onlineLink: "https://mlrental.cl/",
        repo: "https://github.com/Bernullys/ML_Rental_SpA"
    },
    {
        title: "Grounding System",
        description: "This page offers a tool for designing grounding mesh systems, featuring multiple methods for calculating ground resistance values.",
        tools: {
            html: "HTML",
            css: "CSS",
            javaScript: "JavaScript",
            react: "React"
        },
        onlineLink: "https://bernullys.github.io/groundingsystem/",
        repo: "https://github.com/Bernullys/groundingsystem"
    },
    {
        title: "__BAR__RESTAURANT_RUNNER__",
        description: "This project is designed to be used while running a bar/restaurant, or a similar business. It has several features that are very useful for managing this type of business.",
        tools: {
            python: "Python"
        },
        onlineLink: "https://www.youtube.com/watch?v=kJSXuWtw-xs&t=9s",
        repo: "https://github.com/Bernullys/curso_cs50_python/tree/main/project"
    },
    {
        title: "Cleaning_Data",
        description: "The purpose of this project is to take a file with raw data, organize and clean it, and then have it ready to be analyzed.",
        tools: {
            MySQL: "MySQL"
        },
        onlineLink: "https://github.com/Bernullys/cs50_sql/tree/main/MySQL_projects/data_cleaning",
        repo: "https://github.com/Bernullys/cs50_sql/tree/main/MySQL_projects/data_cleaning"
    },
    {
        title: "Electrical_Energy_DB",
        description: "The purpose of my database is to store the electrical energy consumption of each communal room (if it exists) and each apartment in different residential buildings. So that individual invoices can be generated from the monthly record.",
        tools: {
            SQLite: "SQLite"
        },
        onlineLink: "https://www.youtube.com/watch?v=q5SntaEHsjg&t=1s",
        repo: "https://github.com/Bernullys/cs50_sql/tree/main/project"
    },
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
        description: "Here is where I'm applaying the most using javascript vanilla. Under the TMDB API (Only desktop view though)",
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
        onlineLink: "https://www.hvtest.cl",
        repo: "https://github.com/Bernullys/hvtest-github"
    },
    // {
    //     title: "Ecommerce",
    //     description: "This is the starting project to make an ecommerce",
    //     tools: {
    //         html: "HTML",
    //         css: "CSS",
    //         javaScript: "JavaScript",
    //         react: "React",
    //         tailwind: "Tailwind"
    //     },
    //     onlineLink: "",
    //     repo: "https://github.com/Bernullys/Curso-Ecommerce"
    // },
]

function Projects () {
    return (
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
    )
}

export default Projects