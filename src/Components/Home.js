import React from 'react'
import HomeCard from './HomeCard.js'
import Search from './Search.js'
import { useHistory } from "react-router-dom";


function Home({dogs,handleSearchChange, search, clicked}) {


const history = useHistory()

let obj = dogs
let array = [];

for(let key in obj){
  if (obj.hasOwnProperty(key)){
    array.push(key);
  }
}


const filteredDogs = array.filter(dog => {
    return dog.toLowerCase().includes(search.toLowerCase());
  });

 
const mappedDogs = filteredDogs.map((e, i) => {
    
    return (<HomeCard
        key={i}
        dog={e}
        clicked={clicked}
        />
        )
    })


    return (
    <>
    <div>
        <h1>Dog List</h1>
        
    </div>
    <div>
        <Search
            search={search}
            handleSearchChange={handleSearchChange}
        />
    </div>
    <div className="card-flex">
        {mappedDogs}
    </div>
    </>
    )
}

export default Home;