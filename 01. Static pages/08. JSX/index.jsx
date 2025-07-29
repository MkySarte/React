import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

const reactElement = createElement("h1", null, "Hello from createElement!") //so würde man das ohne JSX machen 

//Aausgabe ist das es ein Obj
console.log(reactElement)

root.render(
    reactElement
)