import { Link } from "react-router-dom"
import CategoryCard from "../../Components/CategoryCard"
import CategoryImage from "../../assets/icons/CategoryImage.png"

const categoryList=[
    {
        image:CategoryImage,
        title:"Electronics",
        description:"Electronics Definition – Electronics is the branch of science that deals with the study of flow and control of electrons (electricity) and the study of their behavior and effects in vacuums, gases, and semiconductors, and with devices using such electrons.."
    },
    {
        image:CategoryImage,
        title:"Electrical",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa repellat consequuntur hic sequi blanditiis architecto, tenetur in adipisci praesentium."
    },
    {
        image:CategoryImage,
        title:"Mechanical",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa repellat consequuntur hic sequi blanditiis architecto, tenetur in adipisci praesentium."
    },
    {
        image:CategoryImage,
        title:"Computer Science",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa repellat consequuntur hic sequi blanditiis architecto, tenetur in adipisci praesentium."
    },
    {
        image:CategoryImage,
        title:"Mechatronics",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa repellat consequuntur hic sequi blanditiis architecto, tenetur in adipisci praesentium."
    },
    {
        image:CategoryImage,
        title:"Civil",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa repellat consequuntur hic sequi blanditiis architecto, tenetur in adipisci praesentium."
    },
]

const Home = () => {
    return (
        
        <div className="container">
            <div className="category-container">
                {categoryList.map((data,i)=><CategoryCard {...data} key={i}/> )}
                
                </div>
            </div>
        
    )
}

export default Home
