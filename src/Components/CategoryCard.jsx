import React from 'react'
const CategoryCard = ({image,title,description}) => {
    return (
        <div className="category-card">
            <img src={image} alt={title}/>
            <div className="details-section">
            <h1>{title}</h1>
            <p> {description}</p>
          </div>
        </div>
    )
}

export default CategoryCard
