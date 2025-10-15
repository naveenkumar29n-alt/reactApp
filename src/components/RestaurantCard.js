const RestaurantCard=(props)=>{
const{resData}=props;
const{name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resData?.info
  
  return(
    <div className="res-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="res-logo"></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>⭐{avgRating} stars</h4>
    </div>
  )
}


export default RestaurantCard;