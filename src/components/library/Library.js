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
    <article style={{marginLeft: '40px'}}>
      <div className="currentlyReading" style={{borderBottom: "solid 5px whitesmoke"}}>
        <h2 style={{margin: "10px"}}>Currently Reading</h2>
        <Current books={books} setBooks={setBooks} fetchFunction={fetchFunction}/>
      </div>

      <div className="wantToRead" style={{borderBottom: "solid 5px whitesmoke", marginTop: "20px"}}>
        <h2 style={{marginLeft: "10px"}}>Books To Read</h2>
        <WantToRead books={books} setBooks={setBooks} fetchFunction={fetchFunction}/>
      </div>

      <div className="completedBooks" style={{marginTop: "20px"}}>
        <h2 style={{marginLeft: "10px", marginTop: "5px"}}>Completed Books</h2>
        <Completed books={books} setBooks={setBooks} fetchFunction={fetchFunction} />
      </div>
    </article>
  );
};
