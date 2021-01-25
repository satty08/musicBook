import React from 'react'
import BookCover from './BookLibrary/BookCover';
import "./Home.css";
import Album from './Music/Album';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <div className="home__music">
                <h1 className="home__musicHeading">What to Listen</h1>
                <Link to="/musiclibrary">
                    <button className="home__exploreMusic">Explore Music</button>
                </Link>
                <div className="home__musicAlbums">
                    <Album />
                    <Album />
                </div>
            </div>
            <div className="home__book">
                <h1>What to Read</h1>
                <Link to="/booklibrary">
                    <button className="home__exploreBook">Explore Library</button>
                </Link>
                <div className="home__bookLibrary">
                    <BookCover />
                    <BookCover />
                </div>
            </div>
        </div>
    )
}

export default Home
