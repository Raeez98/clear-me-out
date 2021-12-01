import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className="page-section">
            <h1>Component</h1>
            {/* <marquee>This is category page</marquee> */}
            <Link to="/">Go to home page</Link>
        </div>
    )
}

export default Category
