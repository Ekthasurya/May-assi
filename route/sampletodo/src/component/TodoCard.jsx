import React from 'react'



function TodoCard({ele,fetchData}) {

    const handleDelete =({})=>{  
        fetch(`http://localhost:8080/todo/${ele.id}`,{
            method:"DELETE"
        }).then(e=>e.json())
        .then(e=>{
            fetch('http://localhost:8080/todo').then(e=>e.json()).then((e)=>fetchData(e))
        })
        
    }
  return (
    <div style={{padding:5,margin:5}}>
        <p>{ele.title}</p>
        <p>{ele.description}</p>
        <p>{ele.due_date}</p>
        <p>{ele.status}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoCard