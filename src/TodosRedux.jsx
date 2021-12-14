import React from 'react'
import { useState } from 'react';
import {useSelector,useDispatch } from "react-redux"
import "./todosredux.css"
import { useEffect } from 'react';
import postData from './Services/postData';


const TodosRedux = ({store}) => {
    const[input,setInput]=useState();
    const dispatch=useDispatch();
    const todoList=useSelector(state=>state.todos);
     useEffect(()=>{
        //  let newTask={
            
        //         user: "raeez",
        //         todos: [
        //           {
        //             "text": "This is a task11",  // We created seperate function in postTodo file to use this function
        //             "status": true
        //           },
        //        {
        //             text: "This is a task21",
        //             status: true
        //           }
        //         ]
        //       }

        //     //    postData("http://192.168.1.42:8086/todos",newTask)        //user defined user 
        //     //   .then(data=>console.log(data))
         
            fetch("http://192.168.1.42:8086/todos/raeez")
           .then(response=>response.json())               
           .then(data=>{
           dispatch({
               type:'create',
               data:data[0].todos.map(value=>value.text)     //used to store in dom that given post request
           })
        })
      },[])
    
    return (
        <div className="My-todo">
             <div className="input-main">
                        <input type="text"
                       onChange={(e)=>{
                           setInput(e.target.value)
                        }
                        }/>
                     <button className='add-todo' onClick={
                        ()=>{
                             dispatch({
                                 type:'Add_Todo',
                                 value:input
                             })
                                                                            //   addTodo(input);
                            }
                        }>Add</button>
                    </div>
                    <div className="todo-list">
                        
                            {todoList.map((value,i)=>
                                <div key={i} className="todo-results">
                         {value}
                         <button className='todo-close-button' onClick={()=>{
                             dispatch({
                                 type:'Delete_Todo',
                                 index:i
                             })
                            }
                        }>Close</button>
                             
                             </div>)}
                         </div>
        </div>
                                 
        
    )
}

export default TodosRedux
