import React from 'react'
import * as BooksAPI from './Server/BooksAPI'
import './App.css'
import ShelfBook from './Components/ShelfBook'
import Search from './Components/Search'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    this.newShelf()
  }

  newShelf = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          allBooks: books
        })
        console.log(this.state)
      })
  }

  updateShelf = async (book, shelf) => {
    console.log(book, shelf)
    const result = await BooksAPI.update(book, shelf)
    console.log(result)
    this.newShelf()

  }
  render() {
    return (
      <div className="app">
        <Route exact path="/search">
          <Search
            updateShelf={this.updateShelf}
            shelfBooks= {this.state.allBooks} />
        </Route>
        <Route exact path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ShelfBook
                  books={this.state.allBooks}
                  title="Currently Reading"
                  filter="currentlyReading"
                  updateShelf={this.updateShelf} />
                <ShelfBook
                  books={this.state.allBooks}
                  title="Want to Read"
                  filter="wantToRead"
                  updateShelf={this.updateShelf} />
                <ShelfBook
                  books={this.state.allBooks}
                  title="Read"
                  filter="read"
                  updateShelf={this.updateShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
        </Route>

      </div>
    )
  }
}

export default BooksApp
