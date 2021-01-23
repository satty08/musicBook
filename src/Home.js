import React from 'react'
import "./Home.css";
import Album from './Music/Album';

function Home() {
    return (
        <div className="home">
            <div className="home__music">
                <h1 className="home__musicHeading">What to Listen</h1>
                <button className="home__exploreMusic">Explore Music</button>
                <div className="home__musicAlbums">
                    <Album />
                    <Album />
                    <Album />
                </div>
            </div>
            <div className="home__book">
                <h1>What to Read</h1>
                <button className="home__exploreBook">Explore Library</button>
                <div className="home__bookLibrary">
                    
                </div>
            </div>
        </div>
    )
}

export default Home
