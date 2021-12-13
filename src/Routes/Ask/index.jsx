import React from 'react'
import "./ask.css"

const Ask = () => {
    return (
<div className="category-container">
          <div className="ask-body-container">
            <h1>Ask Question</h1>
            <div className="drop-down-section">
              <div className="ask">Category</div>
           
               <select className="drop-box">
               
                   <option>Electrical</option>
               </select>
               </div>
            
            <div className="text-question-box">
                   
                <div className="ask-question">Question</div>
                <textarea name="text-area"></textarea>
               
                
    
            
            <button className="ask-submit-button">Submit</button>
            </div>
            
            

            </div>
        </div>
    )
}

export default Ask
