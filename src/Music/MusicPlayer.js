import React from 'react';
import './MusicPlayer.css'
import MusicSidebar from './MusicSidebar';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopIcon from '@material-ui/icons/Loop';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

function MusicPlayer() {
    return (
        <div className="musiclibrary">
            <div className="musiclibrary__upper">
                <MusicSidebar />
                <div className="musiclibrary__main">
                    <h1>I'm the main area</h1>
                </div>
            </div>
            <div className="musiclibrary__player">
                <div className="musiclibrary__playerleft">
                    <FavoriteBorderOutlinedIcon />
                </div>
                <div className="musiclibrary__playermiddle">
                    <div className="musiclibrary__playermiddleupper">
                        <ShuffleIcon />
                        <ChevronLeftOutlinedIcon />
                        <PlayCircleFilledWhiteOutlinedIcon />
                        <ChevronRightOutlinedIcon />
                        <LoopIcon />
                    </div>
                    <div className="musiclibrary__playermiddlelower">
                        
                    </div>
                </div>
                <div className="musiclibrary__playerright">
                    <QueueMusicIcon />
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer
