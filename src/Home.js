import React from 'react'
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__music">
                <h1 className="home__musicHeading">What to Listen</h1>
                <button>Explore Music</button>
                <h1>Latest Playlist</h1>
                <div className="home__musicAlbums">

                </div>
            </div>
            <div className="home__book">
                <h1>What to Read</h1>
                <button>Explore Library</button>
                <div className="home__bookLibrary">

                </div>
            </div>
        </div>
    )
}

export default Home
