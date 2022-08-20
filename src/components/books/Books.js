import { useState } from "react";
import { SearchBooks } from "./SearchBooks";

export const Books = () => {
  const [books, setBooks] = useState({
    books: [],
    searchField: "",
  });

  const handleSearch = (e) => {
    console.log(e.target.value);
    setBooks({ searchField: e.target.value });
  };

  const fetchMethod = (e) => {
    e.preventDefault()
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${books.searchField}`)
      .then((response) => response.json())
      .then((bookData) => {
        console.log(bookData.items)
        setBooks({books: bookData.items})})
      }

  return (
    <>
      <div className="searchBox">
        <SearchBooks handleSearch={handleSearch}
                     fetchMethod={fetchMethod} />
      </div>
    </>
  );
};
