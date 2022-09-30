import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./index.css";
import { AppProvider } from './context';
import BookDetails from './components/bookDetails/BookDetails';
import BookList from './components/booklist/BookList';
import About from './pages/about/About';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='book' element={< BookList />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>

);


