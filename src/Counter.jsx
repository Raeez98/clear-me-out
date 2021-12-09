import React from 'react'
import { createStore } from 'redux' 
import "./counter.css"
import { useState } from 'react'


const Counter = ({store}) => {
    const[input,setInput]=useState("");

            const addTodo=(value)=>{
                store.dispatch(
                    {
                        type:"ADD_TODO",
                        value
                    })
            }
            const deleteTodo=(index)=>{
            store.dispatch(
                {
                    type:"DELETE_TODO",
                    index
                })
        }
        const sortTodo=(value)=>{
            store.dispatch(
                {
                    type:"SORT_TODO",
                    value
                })
        }


            return(
                <div className="toDo">
                    <div className="input-section">
                        <input type="text"
                        onChange={(e)=>{
                            setInput(e.target.value)
                        }
                        }/>
                        <button onClick={
                            ()=>{
                                addTodo(input);
                            }
                        }>Add</button>
                    </div>
                    <div className="todo-list">
                        {
                            store.getState().map((value,i)=><div key={i}>
                                {value}
                                <button onClick={()=>{
                                   deleteTodo(i)
                                }}>close</button></div>)
                        }
                    </div>
                    <button onClick={()=>{
                        sortTodo(input);

                    }
                    }>SORT</button>
                </div>
    
        // <div className="main_container_count">
        //     <button onClick={()=>{
        //         store.dispatch({
        //             type:"Increment"
        //         })
        //     }}
        //      className="increment">+</button>

        //     <div className="counter-result">
        //         {store.getState()}</div>

        //     <button onClick={()=>{
        //         store.dispatch({
        //             type:"Decrement"
        //         })
        //     }}

        //     className="decrement">-</button>
            
        // </div>
        
            
        
    
    )
}

export default Counter
