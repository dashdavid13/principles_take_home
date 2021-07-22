import React from 'react'
import HomeCard from './HomeCard.js'
import Search from './Search.js'


function Home({dogs,handleSearchChange, search}) {


let obj = dogs
let array = [];

for(let key in obj){
  if (obj.hasOwnProperty(key)){
    array.push(key);
  }
}



  


 
const mappedDogs = array.map((e, i) => {
    
    return (<HomeCard
        key={i}
        dog={e}
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