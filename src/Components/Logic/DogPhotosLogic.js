import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DogPhotosDisplay from '../Display/DogPhotosDisplay'

function DogPhotosLogic({pups}) {

    const [isLoaded, setIsLoaded] = useState(false)
    const [dogImage, setDogImage] = useState(null)

    /// fetch 4 images from the random API

      useEffect(() => {
        const fetchData = async () => {
          const dog1 = await axios(
            `https://dog.ceo/api/breed/${pups}/images/random`
          );
          const dog2 = await axios(
            `https://dog.ceo/api/breed/${pups}/images/random`
          );

          const dog3 = await axios(
            `https://dog.ceo/api/breed/${pups}/images/random`
          );

          const dog4 = await axios(
            `https://dog.ceo/api/breed/${pups}/images/random`
          );
    
          setDogImage({ image1: dog1, image2: dog2, image3: dog3, image4: dog4 });
          setIsLoaded(true)
        };
    
        fetchData();
       
      }, []);
      


if(!isLoaded) return <h1>Loading</h1>


    return (
    <DogPhotosDisplay dogImage={dogImage}/>
    )
}

export default DogPhotosLogic;