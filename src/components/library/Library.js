import { useState, useEffect } from "react";
import { CompletedBooks } from "./CompletedBooks";
import { CurrentBooks } from "./CurrentBooks";
import { WantToRead } from "./WantToRead";
import './library.css'

//Parent component that renders all sections of library
export const Library = () => {
  //state for all books in database, to be passed to children for filtering based on component
  const [books, setBooks] = useState([]);

  //grab current user information
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //fetch for all books related to the current user/ sets those to state. Set as a variable to be passed down to children
  const fetchFunction = () => {
    return fetch(`http://localhost:8088/books?userId=${mybraryUserObject.id}`)
      .then((response) => response.json())
      .then((bookArray) => {
        setBooks(bookArray);
      });
  };

  //call fetch on load
  useEffect(() => {
    fetchFunction();
  }, []);


  //Each child component in the html is a section of the library
  return (
    <article className="main_library_article">
      <div className="main_library_current">
        <h2 className="library_current_head"
        >Currently Reading</h2>
        
        <CurrentBooks books={books} setBooks={setBooks} fetchFunction={fetchFunction} />

      </div>

      <div className="library_to_read">
        <h2 className="library_toRead_head"
        >Books To Read</h2>

        <WantToRead books={books} setBooks={setBooks} fetchFunction={fetchFunction} />

      </div>

      <div className="main_library_completed_div">
        <h2 className="library_completed_head"
        >Completed Books</h2>

        <CompletedBooks books={books} setBooks={setBooks} fetchFunction={fetchFunction} />

      </div>
    </article>
  );
};
