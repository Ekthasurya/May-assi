import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import ListTodo from './pages/ListTodo'
import DetailTodo from './pages/DetailTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/listtodo' element={<ListTodo/>}/>
        <Route path='/listtodo/:id' element={<DetailTodo/>}/>
        <Route path='/*' element={<>Not Found</>}/>
       </Routes>



     </div>
    </>
  )
}

export default App
