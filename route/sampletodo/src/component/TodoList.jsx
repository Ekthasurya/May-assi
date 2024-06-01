import React, { useContext, } from 'react'
import TodoCard from './TodoCard'
import { todoContext } from '../context/TodoCT'



function TodoList() {

   const {data,fethData} =useContext(todoContext)

  return (
    <div>
    <h1>TodoList</h1>
    {data.map((ele)=><TodoCard fethData={fethData} key={ele.id} ele={ele}/>)}  
    </div>
  )
}

export default TodoList