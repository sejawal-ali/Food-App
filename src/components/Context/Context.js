import { createContext, useState } from "react";

export const item = createContext();


export const Context = ({children}) => {

    const [myCart, setmyCart] = useState([])

   return  <item.Provider value={{myCart, setmyCart}}>
        {children}
    </item.Provider>
}
