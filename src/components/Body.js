import RestaurantCard from "./RestaurantCard";

const Body=()=>{
  return(
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard/>
         <RestaurantCard/>


      </div>
    </div>
  )
}

export default Body;