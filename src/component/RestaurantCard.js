import { useContext } from "react";
import { IMG_CDN_URL } from "../contants";
import UserContext from "../Utils/Usercontex";

const RestrauntCard =  ({ 
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
 
})=> 
{
  const {user} = useContext(UserContext)
  return(
        <div className="w-56 h-30 p-1 m-10 shadow-2xl bg-slate-400  ">
            <img src={ IMG_CDN_URL+cloudinaryImageId}/>
            <h2 className="font-bold">{name}</h2>
            <h2>{cuisines.join(" , ")}</h2>
            <h4> Rating  {totalRatingsString}</h4>
            <h4 className="font-bold">{user.name} - {user.email} </h4>
           
        </div>
    )
}

export default RestrauntCard;

