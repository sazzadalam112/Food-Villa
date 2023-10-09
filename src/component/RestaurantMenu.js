import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../contants";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();

 const restaurant = useRestaurant();
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
        <h2>{restaurant.avgRating}stars</h2>
 </div>
 <div>
  <div>
    <h1>Menu</h1>
    {/* <ul>
      {Object.values(restaurant?.slugs?.items).map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul> */}
  </div>
 </div>
    </div>
  );
};

export default RestaurantMenu;
