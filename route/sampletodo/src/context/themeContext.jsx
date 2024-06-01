import { createContext, useState } from "react";



export const themeContext =createContext();

export const ThemeContextprovider=({children})=>{
       
    const [theme,setTheme]=useState(false)

    return <themeContext.Provider value={{theme,setTheme}}>
        {children}
    </themeContext.Provider>
}