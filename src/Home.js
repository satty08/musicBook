import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Home.css";
import { useStateValue } from './StateProvider';

function Home() {

    const [{user}] = useStateValue()
    let history = useHistory()

    const exploreMusic = () => {
        if (!user) {
            history.push('/login')
        }
        else{
            history.push('/musiclibrary')
        }
    }

    const exploreBook = () => {
        if (!user) {
            history.push('/login')
        }
        else{
            history.push('/booklibrary')
        }
    }

    return (
        <div className="home">
            <div className="home__heading">
                <h1>Welcome</h1>
                <h1>To</h1>
                <h1>MusicBook</h1>
            </div>
            <p>Millions of Songs and Books.</p>
            <div className="home__buttons">
                <button onClick={exploreMusic} className="home__music">Explore Music</button>
                <button onClick={exploreBook} className="home__books">Explore Library</button>
            </div>
        </div>
    )
}

export default Home
