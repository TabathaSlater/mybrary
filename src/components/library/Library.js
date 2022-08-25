//will contain components for current books, read books, want to read books

import { useState, useEffect } from "react";
import { Completed } from "./Completed";
import { Current } from "./Current";
import { WantToRead } from "./WantToRead";

export const Library = () => {
  const [books, setBooks] = useState([]);

  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  const fetchFunction = () => {
    return fetch(`http://localhost:8088/books?userId=${mybraryUserObject.id}`)
      .then((response) => response.json())
      .then((bookArray) => {
        setBooks(bookArray);
      });
  };
  useEffect(() => {
    fetchFunction();
  }, []);


  return (
    <article>
      <div className="currentlyReading">
        <h2>Currently Reading</h2>
        <Current books={books} setBooks={setBooks} fetchFunction={fetchFunction}/>
      </div>

      <div className="wantToRead">
        <h2>Books I Want To Read</h2>
        <WantToRead books={books} setBooks={setBooks} fetchFunction={fetchFunction}/>
      </div>

      <div className="completedBooks">
        <h2>Completed Books</h2>
        <Completed books={books} setBooks={setBooks} fetchFunction={fetchFunction} />
      </div>
    </article>
  );
};
