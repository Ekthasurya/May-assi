import { Children, createContext,useState } from "react";


export const todoContext = createContext()


 export const TodoProvider=({children})=>{

    const [data,setData]=useState([]);
  
 function fetchData(){
  fetch('http://localhost:8080/todo')
  .then(e=>e.json())
  .then(e=>setData(e))
 }

    return <todoContext.Provider value={{data,setData,fetchData}}>
        {children}
    </todoContext.Provider>
}