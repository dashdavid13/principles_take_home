import React from 'react'


function HomeDisplay({dog,clicked}) {
    //display dog names and onClick on each one
    return (
    <div className="dogs_name_container">
        <h5 className="dog_name" onClick={(e) => clicked(dog)}>{dog}</h5>
    </div>
    )
}

export default HomeDisplay;