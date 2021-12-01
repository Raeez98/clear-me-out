import { Link } from "react-router-dom"
import CategoryCard from "../../Components/CategoryCard"
const Home = () => {
    return (
        
        <div className="container">
            <div className="category-container">
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                </div>
            </div>
        
    )
}

export default Home
