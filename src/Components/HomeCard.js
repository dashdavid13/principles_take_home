import React from 'react'


function HomeCard({dog,clicked}) {
    return (
    <div className="dogs_name_container">
        <h5 className="dog_name" onClick={(e) => clicked(dog)}>{dog}</h5>
    </div>
    )
}

export default HomeCard;