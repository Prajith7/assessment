import React from 'react'
import './index.css'
 const Forms = ({inputs,setinputs,todos,setTodos,index,setindex,isediting,setEditing})=> {
    const onInput=(e)=>{
        setinputs(e.target.value)
    }
    const onForm=(e)=>{
        e.preventDefault();
        setTodos([...todos,{title:inputs}]);
        setinputs("");
        console.log(index)
    }

    const onSave=()=>{
      const newarr=[...todos]
      newarr[index]={title:inputs};
      setTodos(newarr);
      setEditing(false);
      setinputs("")
    }
   
  return (
    <>
    <div className='inputBox'>
    <h1>Notes Making!</h1>
       <input type='text' className='box' name="myInput" value={inputs} onChange={onInput} />
  
       {!isediting ?<button className='Addbtn' onClick={onForm} >Add</button>: <button className='savebtn' onClick={onSave}>Save</button>}
    </div>
   
    </>
  )
}
export default Forms;