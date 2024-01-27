import "./Layout.css"

function Layout ({ children }) {
    return (
        <section className="layout">
            { children }
        </section>
    )
}

export default Layout