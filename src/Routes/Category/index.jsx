import React from 'react'
import { Link } from 'react-router-dom'
import CategoryImage from "../../assets/icons/CategoryImage.png"
import Pencil from "../../assets/icons/Vector.svg"
import Eye from "../../assets/icons/Group 1.png"
import { useParams } from 'react-router'

import "./style.css"

const Category = () => {
    const params=useParams();
    return (
        <div className="Main-container">
            <div className="Main-section">
                <div className="image-section">
                    <img src={CategoryImage} alt="/"/></div>
                    <div className="right-section">
                        <h1>{params.title}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis eum ex blanditiis inventore, officia in mollitia eligendi voluptate sequi autem sapiente excepturi deserunt explicabo nam magni dolores eaque quis.</p>
                        <h2>Keys</h2>
                        <div className="button-section">
                        <button  className="buttons">Circuits</button>
                        <button  className="buttons">Circuits</button>
                        <button  className="buttons">Circuits</button>
                        <button  className="buttons">Circuits</button>
                        <button  className="buttons">Circuits</button>
                        <button  className="buttons">Circuits</button>
                        </div>
                    
                    </div>

            </div>
                <div className="Lower-section">
                    <div className="questions">
                     <p>1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam iste repellat veniam error qui at dolorem, sunt unde! Blanditiis, aspernatur voluptatem. Blanditiis accusamus facilis libero corporis? Eius, unde. Ullam, laudantium!</p>
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
                        </div>
                        
                        
                        
                    </div>
                    <div className="questions">
                     <p>1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam iste repellat veniam error qui at dolorem, sunt unde! Blanditiis, aspernatur voluptatem. Blanditiis accusamus facilis libero corporis? Eius, unde. Ullam, laudantium!</p>
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
                        </div>
                        
                        
                        
                    </div>
                    <div className="questions">
                     <p>1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam iste repellat veniam error qui at dolorem, sunt unde! Blanditiis, aspernatur voluptatem. Blanditiis accusamus facilis libero corporis? Eius, unde. Ullam, laudantium!</p>
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
                        </div>
                        
                        
                        
                    </div>
                        
                        
                        
                        
                        
                       
                       
                    </div>
                    
                        
                </div>
            
                        
                   
      

                


    
            
    
    )
}

export default Category
