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
                    <Album
                        img="https://pbs.twimg.com/media/Eee4NVqU4AI2N2g.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                     />
                    <Album 
                        img="https://pbs.twimg.com/media/Eee4NVqU4AI2N2g.jpg"
                        name="G.O.A.T"
                        artist="Diljit Dosanjh"
                    />
                </div>
            </div>
            <div className="home__book">
                <h1>What to Read</h1>
                <Link to="/booklibrary">
                    <button className="home__exploreBook">Explore Library</button>
                </Link>
                <div className="home__bookLibrary">
                    <BookCover
                        book="Game of Thrones"
                        author="George R. R. Martin"
                        cover="https://images-na.ssl-images-amazon.com/images/I/91hPXkwnaeL.jpg"
                     />
                    <BookCover
                        book="Game of Thrones"
                        author="George R. R. Martin"
                        cover="https://images-na.ssl-images-amazon.com/images/I/91hPXkwnaeL.jpg"
                     />
                </div>
            </div>
        </div>
    )
}

export default Home
