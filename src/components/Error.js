import { useRouteError } from "react-router";
const Error=()=>{
  const err=useRouteError()
  return(
    <div className="error">
      <h1>oops something went wrong</h1>
      <h1>{err.status}:{err.statusText}</h1>
    </div>
  )
}
export default Error;