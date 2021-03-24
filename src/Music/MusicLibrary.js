import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Album from './Album';
import './MusicLibrary.css';

function MusicLibrary() {

    const[songs, setSongs] = useState([])

    useEffect(() => {
        
        
    }, [])

    
    return (
        <div className="musiclibrary">
            <div className="musiclibrary__row">
                <div className="musiclibrary__rowHeading">
                    <p>Punjabi Albums</p>
                </div>
                <div className="musiclibrary__rowAlbums">
                <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />      
                </div>
            </div>
            <div className="musiclibrary__row">
                <div className="musiclibrary__rowHeading">
                    <p>Bollywood Albums</p>
                </div>
                <div className="musiclibrary__rowAlbums">
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                    <Album 
                        img="https://1.bp.blogspot.com/-xxHE7E71G04/Xx8Oi8rZlhI/AAAAAAAACnI/3SR7WEmtEygV1_z0LYRwRtVejoyWAH_RACLcBGAsYHQ/s600/G.O.A.T.%2BIntro.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />                    
                </div>
            </div>
        </div>
    )
}

export default MusicLibrary
