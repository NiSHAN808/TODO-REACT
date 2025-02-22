import React, { useState,useEffect } from "react";
import './TodoApp.css';
function TodoApp() {
let [tasks,setTask]=useState([
    {tak:"apple", status:true},
    {tak:"banana", status:false},
    {tak:"mango", status:true}
]);
function handleAddBtn(){
    console.log("newtask");
}
//useEffect()
 //
 return(<>
    <div className="todo-app">
            <h1>Todo App</h1>
            <div className="input-area">
            <input type="text" placeholder="Enter the task"></input>
            <button onClick={handleAddBtn}>add</button>
            </div>  <div className="task-list"> 
                <ul>

                    {tasks.map((task,index) => (
                        <li key={index} style={task.status? {color:"green"}:{color:"red", textDecoration: "line-through"}}>
                            {task.tak} STATUS : {task.status ? ("remenaning" ): "done"}
                            </li>
                            ))}
                </ul>

            </div>
        </div>
    </>)
}
export default TodoApp