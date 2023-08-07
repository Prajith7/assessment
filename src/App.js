import Forms from "./Forms"
import { Todo } from "./Todo";
import { useState } from "react";
import './App.css';

const App=()=> {
  const[inputs,setinputs] = useState("")
  const[todos,setTodos]=useState([])
  let id=0;
return(

 <div>
  <Forms
  inputs={inputs}
  setinputs={setinputs}
  todos={todos}
  setTodos={setTodos}
  id={id}
   />
   <Todo todos={todos} setTodos={setTodos}/>
 </div>
  
)

}

export default App;
