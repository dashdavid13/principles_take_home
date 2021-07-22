import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home.js'
import  Nav from './Nav.js'
import { Switch, Route} from "react-router-dom";


function App() {
  const [dogs, setDogs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then((data) => {
        setDogs(data.message)
        setIsLoaded(true)
        
    });
    
  }, [])

  if(!isLoaded) return <h1>Loading</h1>

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home dogs={dogs}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
