import React from 'react'
import "./BookList.css"
import cover from "../../images/cover.gif"
import { useGlobalContext } from '../../context'
import Loading from '../loader/Loader';
import Book from './Book';

// https://covers.openlibrary.org/b/id/240727-S.jpg
function BookList() {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCover = books.map((singleBook) => {
    return {
      ...singleBook,
      //removing/works/no get only id
      id: (singleBook.id).replace("/works", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : cover
    }
  });

  if (loading) return <Loading />;
  return (
    <section className='booklist'>
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {
            booksWithCover.slice(0, 30).map((item, index) => {
              return (
                <Book key={index}{...item}/>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList;