import React from 'react'
import UpdateShelf from './UpdateShelf'
import propTypes from 'prop-types'

const Book = (props) => {
    if (typeof props.books[0] === "undefined") {
        console.log("waiting")
    } else {
        var myBooks = props.books.filter(book => book.shelf === props.filter)
    }

    return (
        <ol className="books-grid">
            {typeof props.books[0] === "undefined" ? console.log("waiting") :
                myBooks.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <UpdateShelf
                                    book={book}
                                    updateShelf={props.updateShelf}
                                    books= {props.books} />
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))}
        </ol>
    )
}

Book.propTypes = {
    books: propTypes.array.isRequired,
    filter: propTypes.string,
    updateShelf: propTypes.func.isRequired
}

export default Book