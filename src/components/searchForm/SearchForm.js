import React, { useEffect, useRef } from 'react';
import "./SearchForm.css";
import { useGlobalContext } from "../../context";
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handlesubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length===0){
      setSearchTerm("the lost world");
      setResultTitle("please Enter Something...")
    }
    else{
      setSearchTerm(searchText.current.value);
    }
    navigate("/book")
  }
  return (
    <div className='search-form'>
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handlesubmit}>
            <div className="search-form-elem flex flex-sb
            bg-white">
              <input type="text" className="form-control" placeholder='The Lost World ...' ref={searchText} />
              <button className='flex
              flex-c' onClick={handlesubmit}>
                <i className="fa fa-search text-purple" size={32} ></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;