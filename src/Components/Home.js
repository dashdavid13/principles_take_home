import React, {useEffect, useState} from 'react'
import HomeCard from './HomeCard.js'
import Search from './Search.js'
import DogPhotos from './DogPhotos.js'
import { Switch, Route} from "react-router-dom";
import { useHistory } from "react-router-dom";


function Home({dogs,handleSearchChange, search}) {
const [dogShow, setDogShow] = useState(null)
const [currentDog, setCurrentDog] = useState(null)

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

  
  function clicked(pups){
        setDogShow(true)
        setCurrentDog(pups)
        history.push(pups)
  }


 
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
    <div>
        <Switch>
            <Route path='/' component={currentDog}>
                <DogPhotos pups={currentDog}/>
            </Route>
        </Switch>
    </div>
    </>
    )
}

export default Home;