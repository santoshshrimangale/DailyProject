import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import cover from "../../images/cover.gif";
import Loading from '../loader/Loader';
import "./BookDetails.css"

const URL = "https://openlibrary.org/works/";

function BookDetails() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        if (data) {
          const { description, title, covers, subject_places,
            subject_times, subjects } = data;

          const newBook = {
            description: description ? description.value : "no description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/
              ${covers[0]}-L.jpg` : cover,
            subject_places: subject_places ? subject_places.join(",")
              : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(",") : "No subjects found"
          };
          setBook(newBook);

        } else {
          setBook(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getBookDetails();
  }, [id])
  if (loading) return <Loading />
  return (
    <section className='book-details'>
      <div className="container">
        <button type='button' className="flex flex-c back-btn"
          onClick={() => navigate("/book")}>
          <i class="fa-solid fa-arrow-left"></i>
          <span className="fs-18 fw-6">Go back</span>
        </button>
        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            <div className="book-details-item description">
              <span>{book?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-22">Subject places:</span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-22">Subject Times:</span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-22">Subjects</span>
              <span className='text-italic'>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails;