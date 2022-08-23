import { useState, useEffect } from "react"
import { SearchedBookCard } from "./SearchedBookCard"
import { SearchSort } from "./SearchSort"
import "./search.css"

//Parent = SearchContainer
export const SearchResult = ({bookArray, setSort}) => {
  const [taco, setTaco] = useState("")

    // console.log(bookArray.sort)

    useEffect(
    () => {
      console.log(taco)
      const newState={...bookArray}
      newState.sortBooks= taco
      setSort(newState)
    },
    [taco]
    )

    const sortNew = [...bookArray.books].sort((a, b) => {
      return(
        parseInt(b.volumeInfo.publishedDate.substring(0, 4) - a.volumeInfo.publishedDate.substring(0, 4))
      )
    })

    const sortOld = [...bookArray.books].sort((a, b) => {
      return(
        parseInt(a.volumeInfo.publishedDate.substring(0, 4) - b.volumeInfo.publishedDate.substring(0, 4))
      )
    })

  
    if (bookArray.books.length > 0) {
       if (bookArray.sortBooks === "Newest") {
        return ( 
      <article className="searchContent">
          <div className="sort">
            <SearchSort  setTaco={setTaco}/>
          </div>
        <div className="list">
            {sortNew.map((book) => (
                // console.log(book),
                <SearchedBookCard 
                key={book.id}
                thumbnail={book?.volumeInfo?.imageLinks?.smallThumbnail}
                title={book?.volumeInfo?.title}
                authors={book?.volumeInfo?.authors}
                publisher={book?.volumeInfo?.publisher}
                publishDate={book?.volumeInfo?.publishedDate}
                description={book?.searchInfo?.textSnippet}
                pageCount={book?.volumeInfo?.pageCount}
                previewLink={book?.volumeInfo?.previewLink}
                infoLink={book?.volumeInfo?.infoLink}/>
            ))}
        </div>
        </article>
      )} else if 

        (bookArray.sortBooks === "Oldest") {
          return (
        <article className="searchContent">
          <div className="sort">
            <SearchSort  setTaco={setTaco}/>
          </div>
        <div className="list">
            {sortOld.map((book) => (
                // console.log(book),
                <SearchedBookCard 
                key={book.id}
                thumbnail={book?.volumeInfo?.imageLinks?.smallThumbnail}
                title={book?.volumeInfo?.title}
                authors={book?.volumeInfo?.authors}
                publisher={book?.volumeInfo?.publisher}
                publishDate={book?.volumeInfo?.publishedDate}
                description={book?.searchInfo?.textSnippet}
                pageCount={book?.volumeInfo?.pageCount}
                previewLink={book?.volumeInfo?.previewLink}
                infoLink={book?.volumeInfo?.infoLink}/>
            ))}
        </div>
        </article>
           )} else {

            return (
        <article className="searchContent">
          <div className="sort">
            <SearchSort  setTaco={setTaco}/>
          </div>
        <div className="list">
            {bookArray.books.map((book) => (
                // console.log(book),
                <SearchedBookCard 
                key={book.id}
                thumbnail={book?.volumeInfo?.imageLinks?.smallThumbnail}
                title={book?.volumeInfo?.title}
                authors={book?.volumeInfo?.authors}
                publisher={book?.volumeInfo?.publisher}
                publishDate={book?.volumeInfo?.publishedDate}
                description={book?.searchInfo?.textSnippet}
                pageCount={book?.volumeInfo?.pageCount}
                previewLink={book?.volumeInfo?.previewLink}
                infoLink={book?.volumeInfo?.infoLink}/>
            ))}
        </div>
        </article>
       ) }
    }}