import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Banner from "./Banner";

import ListPCard from "./ListPCard";


function Home(){
    
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


    //get all categories    
    const [ categories, setCategories ] = useState([]);
    useEffect(() => {
        // store the categories, doesn't store the duplicated data
            const allCategories = new Set();
    
            // go through all the posts
            for (const item of data) {
    
                // add the category name in the set
                for (const categorie of item.categories) {
                    allCategories.add(categorie.name);
                }
            }
    
            // create an object category object with label and value for the select 
            const categorieOptions = Array.from(allCategories).map((categorie) => ({
                label: categorie,
                value: categorie,
            }));
    
            // put the found categories in a state
            setCategories(categorieOptions);
        },[data]);  

    //get selected Categorie
    var [selectedCategorie, setSelectedCategorie] = useState("All categories");

    //get filtered data
    var[filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if (selectedCategorie === "All categories") {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter((item) => item.categories.some((data)=> data.name === selectedCategorie))
            );
        }
    },[ selectedCategorie, data]);

    return (
        <div className="App">
            <Banner title={"POSTS"}/>
            <div className="filter">
           < select className="form-select" onChange={(e) => setSelectedCategorie(e.target.value)} >
                    <option value="All categories">All categories</option>
                        {categories.map((categorie) => (
                        <option key={categorie.value} value={categorie.value} >
                            {categorie.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="posts row">
                <ListPCard list={filteredData}/>
            </div>   
        </div>
    );
}
export default Home;