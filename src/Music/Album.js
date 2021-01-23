import { Button } from '@material-ui/core'
import React from 'react';
import './Album.css'

function Album() {
    return (
        <div className="album">
            <h1>I'm the album</h1>
            <Button className="album__button">Play Now</Button>
        </div>
    )
}

export default Album
