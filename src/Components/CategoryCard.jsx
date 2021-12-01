import React from 'react'
import CategoryImage from "../assets/icons/CategoryImage.png"

const CategoryCard = () => {
    return (
        <div className="category-card">
            <img src={CategoryImage}/>
            <div className="details-section">
            <h1>Electronics</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa repellat consequuntur hic sequi blanditiis architecto, tenetur in adipisci praesentium.</p>
          </div>
        </div>
    )
}

export default CategoryCard
