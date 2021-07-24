import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DogPhotos({pups}) {

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

// diplay the 4 random images
    return (
        <>
    <div>
        <h1>{pups}</h1>
        <img alt="dog" src={dogImage["image1"].data.message}/>
        <img alt="dog" src={dogImage["image2"].data.message}/>
        <img alt="dog" src={dogImage["image3"].data.message}/>
        <img alt="dog" src={dogImage["image4"].data.message}/>
    </div>
    </>
    )
}

export default DogPhotos;