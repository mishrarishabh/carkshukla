import React, {useReducer, createContext} from "react";
import AppReducer from "./AppReducer";



const model = {
    userdetails:undefined,
    workrowcount:[{uniqueid:"abcdu-h-20"}]
}

export const GlobalContext =  createContext(model);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, model);
    const verifyUser = (user) => {
        dispatch({
          type: 'VERIFY_USER',
          payload: user
        })
      }  

      const workaddRow = (row) => {
        dispatch({
          type: 'ADD_ROW',
          payload: row
        })
      }  

  return (
    <GlobalContext.Provider value={{check:state,verifyUser,workaddRow}}>
      {children}
    </GlobalContext.Provider>
  );
}