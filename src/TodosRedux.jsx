import React from 'react'
import { useState } from 'react';
import {useSelector,useDispatch } from "react-redux"
import "./todosredux.css"


const TodosRedux = ({store}) => {
    const[input,setInput]=useState();
    const dispatch=useDispatch();
    const todoList=useSelector(state=>state)

    
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
                                <div className="todo-results">
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
