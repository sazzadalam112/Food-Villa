import React, { useEffect, useState } from "react";
import RestaraurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {


  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants,setAllRestaurants]= useState([]);
  

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    filterData(searchText, allRestaurants);
    // console.log(allRestaurants);
    console.log(filteredRestaurants);
  }, [searchText]);


  const filterData = (searchText, allRestaurants) => {
      const filterData = allRestaurants?.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
   

    setFilteredRestaurants(filterData);

    return filterData;
  };

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

  

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
        
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants?.length === 0?<Shimmer/>: 
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
           
            <Link to="{./restaurant"><RestaraurantCard
            key={restaurant?.info?.id}
            {...restaurant?.info}
            /></Link>
          );
          })}
          
        </div>
   } 
      </>
    );
  };
  
  export default Body;