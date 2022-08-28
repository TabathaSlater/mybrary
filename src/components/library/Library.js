import { useState, useEffect } from "react";
import { CompletedBooks } from "./CompletedBooks";
import { CurrentBooks } from "./CurrentBooks";
import { WantToRead } from "./WantToRead";

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
    <article
      style={{ marginLeft: '40px' }}>
      <div
        style={{ borderBottom: "solid 5px whitesmoke" }}>
        <h2
          style={{ margin: "10px" }}
        >Currently Reading</h2>
        
        <CurrentBooks books={books} setBooks={setBooks} fetchFunction={fetchFunction} />

      </div>

      <div
        style={{
          borderBottom: "solid 5px whitesmoke",
          marginTop: "20px"
        }}>
        <h2
          style={{ marginLeft: "10px" }}
        >Books To Read</h2>

        <WantToRead books={books} setBooks={setBooks} fetchFunction={fetchFunction} />

      </div>

      <div
        style={{ marginTop: "20px" }}>
        <h2
          style={{
            marginLeft: "10px",
            marginTop: "5px"
          }}
        >Completed Books</h2>

        <CompletedBooks books={books} setBooks={setBooks} fetchFunction={fetchFunction} />

      </div>
    </article>
  );
};
