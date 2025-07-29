// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

import { createElement } from "react";

// root.render(
//     <h1>Hello, React!</h1>
// )


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/
const h1Element = document.createElement("h1");
document.getElementById('root').appendChild(h1Element);
h1Element.textContent = "Hier beschreibe ich schreibe ich ganz genau wie JS ein Ele erstellt"
h1Element.className = "header";

