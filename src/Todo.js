import React from 'react'

export const Todo = ({todos,setTodos}) => {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.length!==id))
        
    }
  return (
    <>
    <div className="todo">{
        todos.map((todo)=>{
            return(
                <>
                 <li key={todo.id} >{todo.title}</li>
            <div>
            <button>Edit</button>
                <button onClick={()=>handleDelete(todos)}>Delete</button>
            </div>
            </>
               
            )
        })
        }</div>
       
    </>
    
  )
}
