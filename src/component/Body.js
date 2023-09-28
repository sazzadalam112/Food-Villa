import { useState,useEffect } from "react";
import { restaurantList  } from "../contants";
import RestrauntCard from "./RestaurantCard";

function filterData(searchtext,restaurants) {
    const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchtext)
    );
    return filterData;
 }


  // const searchtext = "kef";
  const Body = () => {
  const [restaurants,setRestaurants] = useState( restaurantList );
  const [searchtext,setSearchtext] = useState("")
  console.log("re-render")
 
  return(
  <>
<div className="search-container">
  <input 
  type="text"
  className="search-input"
  placeholder="Search"
  value={searchtext}
  onChange={(e) => {
    setSearchtext(e.target.value);
  }}
  />
  
  <button className="search-btn"
   onClick={ () => {
    const data = filterData(searchtext,restaurants);
    setRestaurants(data);
   }}

  >Search</button>

</div>
    <div className="restaurant-list">
        {restaurants. map((restaurant) => {
           return <RestrauntCard {... restaurant.data} key={restaurant.data.key} />
           })
          }
         </div>
     </>
  
      )
  };
  
 
  export default Body;