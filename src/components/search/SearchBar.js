import { useState } from "react";
import { SearchBooks } from "./SearchBooks";
import "bootstrap/dist/css/bootstrap.min.css";

export const SearchBar = ({ setterFunction }) => {
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
        const cleanDatas = cleanData(bookData.items);
        setterFunction({ books: cleanDatas });
        setBooks({ books: cleanDatas });
        console.log(cleanDatas);
      });
  };

  //Responsible for cleaning data without properties needed by adding them
  const cleanData = (books) => {
    const cleanedData = books.map((book) => {
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
    return cleanedData;
  };

  return (
    <div className="searchBox">
      <SearchBooks handleSearch={handleSearch} fetchMethod={fetchMethod} />
    </div>
  );
};
