import React from 'react'

function Search({ search, handleSearchChange}) {
    return(
        <div className="search-container">  
            <div className="wrap">
                <div className="search">
                <input 
                    placeholder='Search' 
                    className='js-search' 
                    type="text" 
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div> 
            </div>
        </div>
    )
}


export default Search
