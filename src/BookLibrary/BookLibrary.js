import React from 'react'
import BookCover from './BookCover'
import './BookLibrary.css'

function BookLibrary() {
    return (
        <div className="booklibrary">
            <div className="booklibrary__row">
                <div className="booklibrary__rowHeading">
                    <p>Fictional</p>
                </div>
                <div className="booklibrary__rowBooks">
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                </div>
            </div>
            <div className="booklibrary__row">
                <div className="booklibrary__rowHeading">
                    <p>Sci-fi</p>
                </div>
                <div className="booklibrary__rowBooks">
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                    <BookCover
                        cover="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587577958-51J6mgYAiyL.jpg?crop=0.989xw:1xh;center,top&resize=480:*"
                        book="Long Bright River"
                        author="Paula Hawkins"
                     />
                </div>
            </div>
        </div>
    )
}

export default BookLibrary
