import React from "react";
import ReactDOM from "react-dom/client"

const heading=<h1 id="heading">hello world🚀</h1>;
const Footer=()=>{
  return(
    <div className="footer">
      {heading}
    </div>
  )
}
const Body=()=>{
  return(
    <div className="body">
      {<h1>{1000+1}</h1>}
      {Footer()}
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>)


