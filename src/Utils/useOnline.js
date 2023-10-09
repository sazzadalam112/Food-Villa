import { useEffect, useState } from "react"


const useOnline = () => {
    const [isOnlne,setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        }
        const handleOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline);

        return () => {
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("online",handleOffline)
        }; 

    },[])
  return  isOnlne;
}

export default useOnline
