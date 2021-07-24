import React from 'react'
import paw from '../Images/paw.png'


function Nav({returnHome}) {
    return (
    <div class="separador">
    <div id="header-nav">
                <h4 className="a" onClick={returnHome}><img className="paw"src={paw} alt="paw"/></h4>
    </div>
    </div>
    )
}

export default Nav;
