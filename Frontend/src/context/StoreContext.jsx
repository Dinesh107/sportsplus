import { createContext } from "react";
import { badmintonMatchesNearMe } from "../assets/assets";



export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

  const contextValue = {
    badmintonMatchesNearMe
  }

   

    return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
    )

}

export default StoreContextProvider;