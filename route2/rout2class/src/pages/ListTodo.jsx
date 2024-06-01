import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ListTodo() {
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:8080/todo')
      .then(e=>e.json())
      .then(e=>setData(e))
    },[])
  return (
    <div>ListTodo

        {data.map(ele=><li key={ele.id}>
           <Link to={`/listtodo/${ele.id}`}>{ele.title}</Link> 
            </li>)}
    </div>
  )
}

export default ListTodo