import React from 'react'



function DogPhotosDisplay({dogImage}) {
    return (
    <div className="image-container">
        <img className="dog-image" alt="dog" src={dogImage["image1"].data.message}/>
        <img className="dog-image" alt="dog" src={dogImage["image2"].data.message}/>
        <img className="dog-image" alt="dog" src={dogImage["image3"].data.message}/>
        <img className="dog-image" alt="dog" src={dogImage["image4"].data.message}/>
    </div>
    )
}

export default DogPhotosDisplay;
