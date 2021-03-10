import React from 'react';
import './BookCover.css';

function BookCover({book, author, cover}) {

    return (
        <div className="bookcover">
            <div className="bookcover__image">
                <img className="bookcover__poster" src={cover} alt=""/>
            </div>
            <div className="bookcover__content">
                <p>{book}</p>
                <p>Author: {author}</p>
            </div>
        </div>
    )
}

export default BookCover
