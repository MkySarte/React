/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <div>
    <h1>Why I'm excited to be learning React.</h1>
        <ul>
            <li>Because I want to step up on WebDev</li>
            <li>I Like to learn new Tech</li>
            <li>I want wo build also a component ..xD</li>
        </ul>
    </div>
)