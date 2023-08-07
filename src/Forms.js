import React from 'react'
import './index.css'
 const Forms = ({inputs,setinputs,todos,setTodos,id})=> {
    const onInput=(e)=>{
        setinputs(e.target.value)
    }
    const onForm=(e)=>{
        e.preventDefault();
        setTodos([...todos,{id:todos.length,title:inputs}]);
        setinputs("");
    }
   
  return (
    <>
    <div className='inputBox'>
    <h1>Notes Making!</h1>
     <form onSubmit={onForm}>
       <input type='text' name="myInput" value={inputs} onChange={onInput} />
       <button >Add</button>
    </form> 
    </div>
   
    </>
  )
}
export default Forms;