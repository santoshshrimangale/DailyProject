import React from 'react'
import Navbar from '../navbar/Navbar';
import SearchForm from '../searchForm/SearchForm';
import "./Header.css"

function Header() {
  return (
    <div className="holder">
      <div className="header">
        <Navbar />
        <div className='header-content flex flex-c
        text-center text-white'>
          <h2 className='header-title
          text-capitalize'>find your book of choice.</h2>
          <br />
          <p className='header-text fs-18 
          fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ut maxime nemo pariatur fuga ab veritatis adipisci nihil cumque voluptatum ipsum atque distinctio blanditiis, quia id, inventore repellendus vitae ad!</p>
       <SearchForm/>
        </div>
      </div>
    </div>
  )
}

export default Header;