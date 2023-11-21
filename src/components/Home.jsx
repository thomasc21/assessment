import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Banner from "./Banner";
import PCard from "./PCard";


function Home(){
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
    return (
        <div className="App">
            <Banner title={"POSTS"}/>
            <div className="posts row">
    {data.map((post) => (
        <div key={post.id} className="col-lg-3 col-md-4 col-sm-6">
            {PCard(post)}
        </div>
    ))}
</div>

            
        </div>
    );
}
export default Home;