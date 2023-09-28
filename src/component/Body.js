 import { useState, useEffect } from "react";
 import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchtext, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchtext)
  );
  return filterData;
}


// const searchtext = "kef";
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchtext, setSearchtext] = useState("")

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
 

  console.log("render")
  return (
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

//         <button className="search-btn"
          onClick={() => {
            const data = filterData(searchtext, restaurants);
            setRestaurants(data);
          }}

        >Search</button>

      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />
        })
        }
      </div>
    </>

  )
};


export default Body;

