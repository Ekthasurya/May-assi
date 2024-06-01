import React, { useContext } from 'react'
import { themeContext } from '../context/themeContext'

function Navbar() {
    const {theme,setTheme}=useContext(themeContext)
  return (
    <div>

        <button onClick={()=>setTheme(!theme)}>{theme?"Dark":"Light"}</button>
    </div>
  )
}

export default Navbar