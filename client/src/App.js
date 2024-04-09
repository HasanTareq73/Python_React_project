// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="App">
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>



  );
}

export default App;
