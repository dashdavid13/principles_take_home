import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home.js'
import  Nav from './Nav.js'
import { Switch, Route} from "react-router-dom";
import { useHistory } from "react-router-dom";
import DogPhotos from './DogPhotos.js'




function App() {
  const [dogs, setDogs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const[search, setSearch] = useState("")
  const [dogShow, setDogShow] = useState(false)
  const [currentDog, setCurrentDog] = useState(null)


  const history = useHistory()

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then((data) => {
        setDogs(data.message)
        setIsLoaded(true)
        
    });
    
  }, [])


  function handleSearchChange(newSearch){
    setSearch(newSearch)
  }

function returnHome(){
  history.push("/")
}

  
function clicked(pups){
  setCurrentDog(pups)
  setDogShow(true)
  history.push("/Detail")
  
}




if(!isLoaded) return <h1>Loading</h1>



const test = () => {
  return (
  <DogPhotos pups={currentDog}/>
  )
  
}




  return (
    <div>
      <Nav returnHome={returnHome} />
      <Switch>
        <Route exact path="/">
          <Home 
          dogs={dogs}
          handleSearchChange={handleSearchChange}
          search={search}
          clicked={clicked}
            />
        </Route>
        <Route path="/Detail">
        {test}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
