import React from 'react'
import { createStore } from 'redux' 
import "./counter.css"


const Counter = ({store}) => {
    return (
        <div className="main_container_count">
            <button onClick={()=>{
                store.dispatch({
                    type:"Increment"
                })
            }}
             className="increment">+</button>

            <div className="counter-result">
                {store.getState()}</div>

            <button onClick={()=>{
                store.dispatch({
                    type:"Decrement"
                })
            }}
            
            className="decrement">-</button>
            
        </div>
    )
}

export default Counter
