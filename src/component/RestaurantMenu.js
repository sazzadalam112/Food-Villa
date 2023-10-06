import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant,setRestaurant] = useState(null);

  useEffect(() => {
   getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch("https://swiggyapiwrapper.dineshrout.repl.co/api/restaurants/221504" + resId  
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    
  }
  
  return (!restaurant) ? <Shimmer /> :(
    <div className="menu">
      <div>
        <h1>Restaurant id : {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src = {IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        <h2>{restaurant.areaName}</h2>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.id}</h2>
        <h2>{restaurant.cuisines}</h2>
 </div>
 <div>
  <div>
    <h1>Menu</h1>
    <ul></ul>
  </div>
 </div>
    </div>
  );
};

export default RestaurantMenu;
