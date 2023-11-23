import PCard from "./PCard";
import Banner from "./Banner";
import { useEffect,useState } from "react";
import Axios from "axios";
import '../styles/DetailsPCard.css';
import { Link, useParams } from "react-router-dom";

function DetailsPcard(){

    //get all data 
const [data, setData] = useState([]);
useEffect(() => {
    Axios.get('http://localhost:3000/api/posts')
    .then((res) => {
        setData(res.data.posts);
    }
    )
    .catch((error) => 
        console.log(error));
    }, [])

    //get id off item
    const { id } = useParams();
    
    //get post with id
    const post = data.filter((item) => item.id === id);


console.log(id);
return(
    <div className="details-pcard">
        <Banner title={"Details Post"}/>
        <div className="details-pcard__content">
        {post.map((item, index) => 

        <div className="item" key={index}>
        <PCard {...item} />
        <div className="summary-categories">
        <p>{item.summary}</p>
        {item.categories.map((categorie) => (
                <p key={categorie.id} value={categorie.id}  >
                    {categorie.name}
                </p>
            ))}
            </div>
        </div>
        )} 
        </div>
        <Link
        to="/Home" >    
        <button>Back</button>
        </Link>
   </div>
);

};
export default DetailsPcard;