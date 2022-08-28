import { useState } from "react";
import { SearchBooks } from "./SearchBooks";
import "bootstrap/dist/css/bootstrap.min.css";


//Responsible for handling searches on find books page; parent is SearchContainer.js
export const SearchBar = ({ setterFunction }) => {
  //state for books returned from google api and the text input for the search field
  const [books, setBooks] = useState({
    books: [],
    searchField: "",
  });

  //Responsible for what happens when a query is typed in the search bar
  const handleSearch = (e) => {
    // console.log(e.target.value);
    setBooks({ searchField: e.target.value });
  };

  //Responsible for fetching query results and setting them to state in parent component (search container)
  const fetchMethod = (e) => {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${books.searchField}&maxResults=40`
    )
      .then((response) => response.json())
      .then((bookData) => {
        //cleanDatas is responsible for taking data that has been cleaned and returning the proper array for accessing information
        const cleanDatas = cleanData(bookData.items);
        //sets state in the parent function and current component with the cleaned up book array
        setterFunction({ books: cleanDatas });
        setBooks({ books: cleanDatas });
      });
  };

  //Responsible for cleaning data without properties needed by adding them
  const cleanData = (books) => {
    const cleanTheData = books.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000 Unknown";
      } else {
        if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
          book.volumeInfo["imageLinks"] = {
            smallThumbnail:
              "https://icon-library.com/images/no-image-available-icon/no-image-available-icon-10.jpg",
          };
        }
      }
      return book;
    });
    return cleanTheData;
  };

  return (
    <div className="searchBox">
      <SearchBooks handleSearch={handleSearch} fetchMethod={fetchMethod} />
    </div>
  );
};
