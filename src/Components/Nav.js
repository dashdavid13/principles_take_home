import React from 'react'


function Nav({returnHome}) {
    return (
    <header>
        <nav>
            <h1>Title</h1>
            <h4 onClick={returnHome}>HomePage</h4>
        </nav>
    </header>
    )
}

export default Nav;