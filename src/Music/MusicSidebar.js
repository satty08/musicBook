import React from 'react'
import './MusicSidebar.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';

function MusicSidebar() {
    return (
        <div className="musicsidebar">
            <div className="musicsidebar__upper">
                <h2 className="musicsidebar__content">
                    <HomeOutlinedIcon />
                    <span>Home</span>
                </h2>
                <h2 className="musicsidebar__content">
                    <LibraryMusicOutlinedIcon />
                    <span>Library</span>
                </h2>
                <h2 className="musicsidebar__content">
                    <QueueMusicOutlinedIcon />
                    <span>Collection</span>
                </h2>
            </div>
            <div className="musicsidebar__lower">
                <p>Install App</p>
            </div>
        </div>
    )
}

export default MusicSidebar
