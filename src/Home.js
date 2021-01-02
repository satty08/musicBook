import React from 'react'
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__music">
                <h1>What to Listen</h1>
                <button>Explore Music</button>
            </div>
            <div className="home__book">
                <h1>What to Read?</h1>
                <button>Explore Library</button>
            </div>
        </div>
    )
}

export default Home
