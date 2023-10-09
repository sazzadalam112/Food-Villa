 export const filterData = (searchText, allRestaurants) => {
    const filterData = allRestaurants?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  
  
  // setFilteredRestaurants(filterData);
  
  return filterData;
  };