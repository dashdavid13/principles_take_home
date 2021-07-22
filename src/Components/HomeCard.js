import React from 'react'


function HomeCard({dog}) {
    return (
    <div className="dogs_name_container">
        <h5 className="dog_name">{dog}</h5>
    </div>
    )
}

export default HomeCard;