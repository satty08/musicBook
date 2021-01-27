// import { Button } from '@material-ui/core'
import React from 'react';
import './Album.css'

function Album({name, artist, img}) {
    return (
        <div className="album">
            <div className="album__image">
                <img className="album__poster" src={img} alt=""/>
            </div>
            <div className="album__content">
                <p>{name}</p>
                <p>Artist: {artist}</p>
            </div>
        </div>
    )
}

export default Album
