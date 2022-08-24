import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResult } from "./SearchResult";

//parent component of SearchBar and SearchResult
export const SearchContainer = () => {
  //Get state from SearchBar and pass it to SearchResults
  const [bookArray, setBookArray] = useState({
    books: [],
    sortBooks: "",
  });

  return (
    <>
      <SearchBar setterFunction={setBookArray} booksProp={bookArray} />

      <SearchResult bookArray={bookArray} setSort={setBookArray} />
    </>
  );
};
