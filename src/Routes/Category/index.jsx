import React from 'react'
import { Link } from 'react-router-dom'
import CategoryImage from "../../assets/icons/CategoryImage.png"
import "./style.css"

const Category = () => {
    return (
        <div className="Main-container">
            <div className="Main-section">
                <div className="image-section">
                    <img src={CategoryImage} alt="/"/></div>
                    <div className="right-section">
                        <h1>Electronics</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis eum ex blanditiis inventore, officia in mollitia eligendi voluptate sequi autem sapiente excepturi deserunt explicabo nam magni dolores eaque quis.</p>
                        <h2>News</h2>
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


            </div>
            
    
    )
}

export default Category
