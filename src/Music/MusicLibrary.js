import React from 'react';
import './MusicLibrary.css'
import MusicSidebar from './MusicSidebar';

function MusicLibrary() {
    return (
        <div className="musiclibrary">
            <div className="musiclibrary__upper">
                <MusicSidebar />
                <div className="musiclibrary__main">
                    <h1>I'm the main area</h1>
                </div>
            </div>
            <div className="musiclibrary__player"></div>
        </div>
    )
}

export default MusicLibrary
