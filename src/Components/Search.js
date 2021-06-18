import React, { Component } from 'react'
import * as BooksAPI from '../Server/BooksAPI'
import UpdateShelf from './UpdateShelf'
import { Link } from 'react-router-dom'

class Search extends Component {

    state = {
        query: "",
        searchedBooks: []
    }

    updateQueryHandler = (query) => {
        this.setState({
            query: query
        })
    }

    render() {

        if (this.state.query) {
            BooksAPI.search(this.state.query)
                .then((books) => {
                    this.setState({ searchedBooks: books })
                })
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={event => this.updateQueryHandler(event.target.value)} />

                    </div>
                </div>
                {this.state.query ?
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.searchedBooks.length > 0 &&
                                this.state.searchedBooks.map(book =>
                                    book.hasOwnProperty("imageLinks") ?
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                    <UpdateShelf
                                                        shelfBooks={this.props.shelfBooks}
                                                        book={book}
                                                        updateShelf={this.props.updateShelf}
                                                        books={this.state.searchedBooks} />
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.authors}</div>
                                            </div>
                                        </li>
                                        :
                                        console.log("error")
                                )
                            }
                        </ol>
                    </div> :
                    null}
            </div>
        )
    }

}

export default Search