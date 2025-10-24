import React from "react";
import ReactDOM from "react-dom/client";

const heading=<h1 id="heading">hello world🚀</h1>
const Footer=()=>{
  return(
    <div className="footer">
      <h1>Footer component</h1>
    </div>
  )
}
const Body=()=>{
  return(
    <div className="body">
      {heading}
      <h1>body component</h1>
      {Footer()}
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>)
console.log(heading);
console.log(<Body/>);
