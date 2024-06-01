import { useContext, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './component/TodoList'
import { todoContext } from './context/TodoCT'
import Navbar from './component/Navbar'
import { themeContext } from './context/themeContext'


function App() {
  const userTitle=useRef()
  const userdes=useRef()
  const userdue=useRef()
  const userstatus=useRef()
const [data,setData]=useState([]);
 const {fetchData} =useContext(todoContext)
  useEffect(()=>{
     fetchData()
  },[])

  function handleAdd(e){
      e.preventDefault();

      fetch('http://localhost:8080/todo',{
        method:"POST",
        headers:{
          "content-type":"aplication/json"
        },
        body:JSON.stringify({
          "title":userTitle.current.value,
      "description": userdes.current.value,
      "due_date":userdue.current.value,
      "status": userstatus.current.value
        })
      })
    .then(e=>e.json())
    .then(e=>fetchData(e)).finally(()=>{
      userstatus.current.value=""
      userdue.current.value=""
      userdes.current.value=""
      userTitle.current.value=""
    })
  }
   const {theme}=useContext(themeContext)
  return (
    <>
    <div style={{backgroundColor:theme?"red":"green"}}>
      <Navbar/>
      <p>This is Home Page</p>
      <form onSubmit={handleAdd} >
      <input  ref={userTitle} />
      <input  ref={userdes} />
      <input  ref={userdue} />
      <input  ref={userstatus} />
      <input type='submit' />
      </form>
      <TodoList/>
      </div>
      
      
    </>
  )
}

export default App
