import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home.js'
import  Nav from './Nav.js'
import { Switch, Route} from "react-router-dom";
import { useHistory } from "react-router-dom";




function App() {
  const [dogs, setDogs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const[search, setSearch] = useState("")

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



  if(!isLoaded) return <h1>Loading</h1>

  

 

  return (
    <div>
      <Nav returnHome={returnHome} />
      <Switch>
        <Route exact path="/">
          <Home 
          dogs={dogs}
          handleSearchChange={handleSearchChange}
          search={search}
            />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
