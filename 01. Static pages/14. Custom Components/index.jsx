import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */
function PageComponent() {
    return(
        <div>
            <ul>
                <li>Bla</li>
                <li>Bli</li>
                <li>Blub</li>
                <li>Its React!</li>
            </ul>
        </div>
    )
}
root.render(
    <PageComponent s/>
)
