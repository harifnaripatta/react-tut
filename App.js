import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout";

/*
Components
  - Header
    - Logo
    - Nav Items
  - Body
    - Search 
    - RestaurantContainer
      - RestaurantCard
  - Footer
    - CopyRight
    - Links
    - Address
    - Contact
*/

/* React.createElement => ReactElement - JS Object => HTMLElement(render)
const parent = React.createElement("h1", { id: "parent" }, [
  React.createElement("h1", {}, "I am an h1 tag"),
  React.createElement("h2", {}, "I am an h2 tag"),
]);
*/

/* JSX - is not HTML in JS, its HTML or XML - like syntax 
JSX(transpiled before it reaches the JS) 
JSX => Babel transpiles to React.createElement => ReactElement-JS Object => HTMLElement(render)
Babel is converting code to React
*/
// this is react element
// const jsxHeading1 = (
//   <div id="heading" className="head">
//     <h1>React Tut using JSX 🚀</h1>
//     <p>React Tut using JSX 🚀</p>
//   </div>
// );

// this is react functional component
// const HeadingComponent = () => {
//   const courseName = "React";
//   return (
//     <div>
//       <JsxHeading />

//       <h1>This is {courseName} Funtional Component</h1>
//     </div>
//   );
// };

// const JsxHeading = () => (
//   <div id="heading" className="head">
//     <h1>React Tut using JSX 🚀</h1>
//     <p>React Tut using JSX 🚀</p>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppLayout />
  </>
);
