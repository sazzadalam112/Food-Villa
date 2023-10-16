import React, { useEffect, useState,useContext} from "react";
import RestaraurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/Usercontex";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants,setAllRestaurants]= useState([]);
  const {user,setUser} = useContext(UserContext)
  

  useEffect(() => {
    getRestaurants();
  }, []);

   async function getRestaurants() {
    

    const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();

    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();
 if(!isOnline) { 
  return <h1>🔴 offline, please check the internet</h1>
 }

 if (!allRestaurants) return null;

 
  return  allRestaurants?.length === 0 ? ( <Shimmer/> ) :(
    <>
      <div className="search-container p-5 bg-slate-500 my-5">
        <input
          type="text"
          className="focus:bg-red-200 p-2 m-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
        
        <button
         className="p-2 m-2 bg-blue-900 text-white rounded-lg hover:bg-violet-900"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
       <input value={user.name} onChange={
        e => setUser({
          ...user,
          name: e.target.value,
          
        })
       }></input>
         <input value={user.email} onChange={
        e => setUser({
          ...user,
          email: e.target.value,
          
        })
       }></input>
        
      </div>
      
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
           
            <Link to="{./restaurant"><RestaraurantCard
            key={restaurant?.info?.id}
            {...restaurant?.info}
            /></Link>
          );
          })}
          
        </div>
    
      </>
    );
  };
  
  export default Body;