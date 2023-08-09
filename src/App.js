import Forms from "./Forms"
import { Todo } from "./Todo";
import { useState } from "react";
import './App.css';

const App=()=> {
  const[inputs,setinputs] = useState("")
  const[todos,setTodos]=useState([])
  const[index,setindex]=useState(null)
  const[isediting,setEditing]=useState(false)
return(

 <div>
  <Forms
  inputs={inputs}
  setinputs={setinputs}
  todos={todos}
  setTodos={setTodos}
  index = {index}
  setindex={setindex}
  isediting={isediting}
  setEditing={setEditing}
   />
   <Todo todos={todos} setTodos={setTodos} setinputs={setinputs} setEditing={setEditing} setindex={setindex}/>
 </div>
  
)

}

export default App;
