import React, {useReducer, createContext} from "react";
import AppReducer from "./AppReducer";



const model = {
    userdetails:undefined,
    workrowcount:[{uniqueid:"abcdu-h-20"}],
    employeeworkupdate:[]
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


     const removeaddrow= (id) => {
        dispatch({
          type: 'REMOVE_ROW',
          payload: id
        })
      }  

      const employeeworkupdate= (data) => {
        console.log(model)
        dispatch({
          type: 'EMPLOYEEWORKUPDATE',
          payload: data
        })
      }  

  return (
    <GlobalContext.Provider value={{check:state,verifyUser,workaddRow,removeaddrow,employeeworkupdate}}>
      {children}
    </GlobalContext.Provider>
  );
}