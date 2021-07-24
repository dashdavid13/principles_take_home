import '../App.css';
import React, { useEffect, useState } from 'react';
import HomeLogic from './HomeLogic.js'
import  Nav from '../Display/Nav.js'
import { Switch, Route} from "react-router-dom";
import { useHistory } from "react-router-dom";
import DogPhotosLogic from './DogPhotosLogic.js'




function App() {
  const [dogs, setDogs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const[search, setSearch] = useState("")
  const [currentDog, setCurrentDog] = useState(null)
 


  const history = useHistory()


  // request to get all names
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


  // navigate back to home page
function returnHome(){
  history.push("/")
}

  // onClick of each dog name that brings to detail page
function clicked(pups){
  setCurrentDog(pups)
  history.push("/Detail")
  
}




if(!isLoaded) return <h1>Loading</h1>

  return (
    <div className="top-container">
      <Nav returnHome={returnHome} />
      <Switch>
        <Route exact path="/">
          <HomeLogic 
          dogs={dogs}
          handleSearchChange={handleSearchChange}
          search={search}
          clicked={clicked}
            />
        </Route>
        <Route path="/Detail">
        <DogPhotosLogic pups={currentDog} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
