import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body=()=>{
  const[listOfRestaurants,setListOfRestaurants]=useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0102&lng=76.9701&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setListOfRestaurants(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  return (listOfRestaurants.length===0)?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
          setListOfRestaurants(filteredRestaurants)

        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
     {
      listOfRestaurants.map((restaurant)=><RestaurantCard    key={restaurant.info.id} resData={restaurant}/>)
     }
         

      </div>
    </div>
  )
}

export default Body;