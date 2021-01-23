// import { Button } from '@material-ui/core'
import React from 'react';
import './Album.css'

function Album() {
    return (
        <div className="album">
            <div className="album__image">
                <img className="album__poster" src="https://pbs.twimg.com/media/Eee4NVqU4AI2N2g.jpg" alt=""/>
            </div>
            <div className="album__content">
                <p>G.O.A.T</p>
                <p>Artist: Diljit Dosanjh</p>
            </div>
        </div>
    )
}

export default Album
