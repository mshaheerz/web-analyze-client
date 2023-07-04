import { createContext , useEffect, useState} from "react";
export const UserContext = createContext({})
import axios from "axios";
export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    const [ready, setReady] = useState(false)

    useEffect( ()=>{
        async function dd(){
            if(!user) {
            const {data} = await axios.get('/profile');
            setUser(data);
            setReady(true);
        }
        }
        dd()
    },[])
    return (
        <UserContext.Provider value={{user,setUser,ready,setReady}}>
            {children}
        </UserContext.Provider>
        
    )
}
