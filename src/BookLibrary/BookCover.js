import React from 'react';
import './BookCover.css';

function BookCover() {
    return (
        <div className="bookcover">
            <div className="bookcover__image">
                <img className="bookcover__poster" src="https://images-na.ssl-images-amazon.com/images/I/91hPXkwnaeL.jpg" alt=""/>
            </div>
            <div className="bookcover__content">
                <p>Game of Thrones</p>
                <p>Author: George R. R. Martin</p>
            </div>
        </div>
    )
}

export default BookCover
