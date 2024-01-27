import "./ToolCards.css"

function ToolCards ( { iconImage, techName}) {
    return (
        <article className="toolcard_container">
            <div className="tool_icon"> { iconImage } </div>
            <h4> { techName }</h4>
        </article>
    )
}

export default ToolCards