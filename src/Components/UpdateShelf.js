import React, { Component } from 'react'

class UpdateShelf extends Component {
    render() {

        let Shelf = "none"

        if (typeof this.props.book.shelf !== "undefined") {
            for (let book of this.props.books) {
                if (book.id === this.props.book.id) {
                    Shelf = book.shelf;
                    break;
                }
            }
        }

        if (typeof this.props.book.shelf === "undefined") {
            for (let shelfBook of this.props.shelfBooks) {
                if (shelfBook.id === this.props.book.id) {
                    Shelf = shelfBook.shelf
                    break
                }
            }
        }

        return (
            <div className="book-shelf-changer">
                <select defaultValue={Shelf} onChange={(e) => this.props.updateShelf(this.props.book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }


}

export default UpdateShelf