import React from 'react'

export const Todo = ({todos, setTodos,setinputs,setEditing,setindex}) => {

  const handleEdit=(index)=>{
    setinputs(todos[index].title)
    setEditing(true);
    setindex(index);
  }
   const handleDelete=(index)=>{
    const deletearr = [...todos]
    deletearr.splice(index,1)
    setTodos(deletearr)
   } 
  return (
    <>
    <div className="todo">{
        todos.map((todo,index)=>{
          console.log(todo.id)
            return(
                <>
                 <li className='lists' key={todo.id} >{todo.title}</li>
            <div>
            <button  className="editbtn" onClick={()=>handleEdit(index)}>Edit</button>
            <button  className="dltbtn" onClick={()=>handleDelete(index)} >Delete</button>
            </div>
            </>
               
            )
        })
        }</div>
       
    </>
     
  )
}
