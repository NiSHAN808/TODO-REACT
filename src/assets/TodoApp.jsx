import React, { useState,useEffect, useRef } from "react";
import './TodoApp.css';
function TodoApp() {
    let inputref=useRef(null);

let [tasks,setTask]=useState([
    {tak:"apple", status:true},
    {tak:"banana", status:false},
    {tak:"mango", status:true}
]);

function handleAddBtn(){
    
    let x= inputref.current.value;
    let newtask={tak:x, status:true};
    setTask(t=>[...t,newtask]);
    inputref.current.value="";
}
function handleDelBtn(i){
    let x=0;
    setTask(tasks.filter((_,index)=>i!==index ));
   
}
function handleStatusChange(i){
  const updatedTasks = tasks.map((task, index) => 
    index === i ? { ...task, status: !task.status } : task
  );
  setTask(updatedTasks);
} 

     
 

useEffect(()=>{
console.log("re render");
})
 
 return(<>
    <div className="todo-app">
            <h1>Todo App</h1>
            <div className="input-area">
            <input ref={inputref} type="text" placeholder="Enter the task"></input>
            <button onClick={handleAddBtn}>add</button>
            </div>  <div className="task-list"> 
                <ul>

                    {tasks.map((task,index) => (
                        <li key={index} style={task.status? {color:"green"}:{color:"red", textDecoration: "line-through"}}>
                           <span onClick={()=>handleDelBtn(index)}> {task.tak}</span>
                           <span onClick={()=>handleStatusChange(index)}>{task.status ? ("pending" ): "done"}
                           </span> 
                            </li>
                            ))}
                </ul>

            </div>
        </div>
    </>)
}
export default TodoApp