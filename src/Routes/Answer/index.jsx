import React from 'react'
import Pencil from "../../assets/icons/Vector.svg"
import Eye from "../../assets/icons/Group 1.png"
import "../Category/style.css"
import "./answer.css"

const index = () => {
    return (
        <div className="Main-container">
            <div className="Lower-section">
                    <div className="questions-view">
                     <p className="para">1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam iste repellat veniam error qui at dolorem, sunt unde! Blanditiis, aspernatur voluptatem. Blanditiis accusamus facilis libero corporis? Eius, unde. Ullam, laudantium!</p>
                       <div className="button-section">
                
                         <button className="buttons">Circuits</button>
                         <button className="buttons">Circuits</button>
                         <button className="buttons">Circuits</button>
                       </div>
                    <div className="comment-section">
                        <div className="pencil-section">
                            <img src={Pencil}/>
                            <div className="number">3</div>
                            <div className="answers">Answers</div>
                        </div>
                        <div className="view-section">
                             <img src={Eye}/>
                             <div className="number">315</div>
                             <div className="answers">Views</div>
                        
                        </div>
                          <div className="date-section">
                            <div className="answers">Date</div>
                            <div className="numbers">11/12/2021</div>
                           </div>
                        </div>
                    </div>
                    
                <div className="questions">
                    <div className="name">Vishnu</div>
                    
                    <div className="date-section">
                            <div className="answers1">Date</div>
                            <div className="number1">11/12/2021</div>
                           
                    </div>
                    
                    
                    
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum voluptate corrupti, hic repellat voluptatum unde. Vitae consectetur, pariatur, maiores velit a cupiditate dolorum eum officiis nostrum adipisci, aperiam illo!</p>
                        
                    </div>
                 <div className="questions">
                    <div className="name">Vishnu</div>
                    
                    <div className="date-section">
                            <div className="answers1">Date</div>
                            <div className="number1">11/12/2021</div>

                          
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum voluptate corrupti, hic repellat voluptatum unde. Vitae consectetur, pariatur, maiores velit a cupiditate dolorum eum officiis nostrum adipisci, aperiam illo!</p>
                     </div> 
                     </div> 
                     <div className="questions">
                    <div className="name">Vishnu</div>
                    
                    <div className="date-section">
                            <div className="answers1">Date</div>
                            <div className="number1">11/12/2021</div>
                           
                    </div>
                    
                    
                    
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum voluptate corrupti, hic repellat voluptatum unde. Vitae consectetur, pariatur, maiores velit a cupiditate dolorum eum officiis nostrum adipisci, aperiam illo!</p>
                        
                    
                                    
            </div>
        </div>
    )
}

export default index
