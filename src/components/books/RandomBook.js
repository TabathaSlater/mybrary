import { useState, useEffect } from "react"
import { BookButton } from "./BookButton"
import { RandomBookCard } from "./RandomBookCard"



export const RandomBook = () => {
    //state storing randomly set isbn
    const [isbnNumber, setIsbn] = useState(0)
    //state for books generated from google api based on isbnNumber
    const [randomBooks, setRandom] = useState([])
    //state for button to determine when to show a random book (if button has been clicked, set to true and show book card)
    const [buttonState, setButton] = useState(false)

    //All setting goes into a function with the fetch so that the data is loaded before setting/functions try to happen
    const NYTAPIFetch = () => {
        return fetch('https://api.nytimes.com/svc/books/v3/lists/current/e-book-nonfiction.json?api-key=jdCS48E6bMXik69LVXM4h5CISqhaQHh6')
            .then(response => response.json())
            .then((bookArray) => {

                //extract relevent info from API call and set results to variable
                const numberArray = bookArray.results.books.map((book) => {
                    let number = book?.isbns[0]?.isbn10
                    return number
                })

                //Grab a random isbn number from previous array and set to state
                const randomIsbn = numberArray[Math.floor(Math.random() * numberArray.length)]
                setIsbn(randomIsbn)
            })
            .then(() => {
                //String interpolate variable with random isbn into Google Books fetch to grab information about the relevant book
                return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`)
                    .then(response => response.json())
                    .then((data) => {
                        //set the book information to state
                        setRandom(data.items[0])
                    })

            })
    }

    //useEffect for API calls and functions
    useEffect(
        () => {
            NYTAPIFetch()
        },

        //Watch button state so that when it is clicked, relevant information is shown
        [buttonState]
    )

    //Conditional to show book information when the button is clicked or a prompt when it hasn't been clicked yet
    if (buttonState === true) {
        return (

            <RandomBookCard
                randomBooks={randomBooks}
                setButton={setButton}
                NYTAPIFetch={NYTAPIFetch} />
        )

    } else {
        return (
            <section className="random_prompt"
                style={{ marginRight: "2%" }}>
                <h4 className="random_h4"
                >Book Button</h4>
                <div className="random_text"
                >Press this button to get a recommendation based on current New York Times Bestsellers!
                </div>
                <BookButton
                    setButton={setButton}
                    apiFetch={setRandom} />
            </section>
        )
    }
}