import React from 'react';
import Book from './Book'

const ShelfBook = (props) => {
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <Book
                books= {props.books}
                filter= {props.filter}
                updateShelf={props.updateShelf} />
            </div>
        </div>
    )
}

export default ShelfBook