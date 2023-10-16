import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "Hello Sazzad",
       email: "hello@gamil.com"
    }
    
});
export default UserContext;