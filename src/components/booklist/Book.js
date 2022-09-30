import React from 'react'
import { Link } from 'react-router-dom';
import "./BookList.css"

function Book(book) {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book${book?.id}`}{...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>
        {/* <div className="book-item-info-item auther fs-15">
          <span className="text-capitlize fw-7">Auther</span>
          <span>{book.auther}</span>
        </div> */}

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitlize fw-7">Total Editions:</span>
          <span>{book.edition_count}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitlize fw-7">Fisrt publish Year</span>
          <span>{book.first_public_year}</span>
        </div>

      </div>
    </div>
  )
}

export default Book;