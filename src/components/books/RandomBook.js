import { useState, useEffect } from "react"
import { BookButton } from "./BookButton"
import { Card } from 'react-bootstrap'



export const RandomBook = () => {
    const [isbnNumber, setIsbn] = useState(0)
    const [randomBooks, setRandom] = useState([])
    const [buttonState, setButton] = useState(false)

    const NYTAPIFetch = () => {
        return fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jdCS48E6bMXik69LVXM4h5CISqhaQHh6')
            .then(response => response.json())
            .then((bookArray) => {
                const numberArray = bookArray.results.books.map((book) => {
                    let number = book?.isbns[0]?.isbn10
                    return number
                })
                console.log(bookArray.results.books)
                console.log(numberArray)
                const randomIsbn = numberArray[Math.floor(Math.random() * numberArray.length)]
                setIsbn(randomIsbn)
            })
            .then(() => {
                return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`)
                    .then(response => response.json())
                    .then((data) => {
                        setRandom(data.items[0])
                        console.log(data.items[0])
                    })

            })
    }

    useEffect(
        () => {
            NYTAPIFetch()
        },
        [buttonState]
    )

    if (buttonState === true) {

        return (
            <>

                <Card style={{ width: "18rem", color: "#2D4B4D", border: "0px",marginLeft: "175px", marginRight: '250px'}}>
                    <h3
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "0px",
                            marginTop: "10px"
                        }}>
                        Book Button
                    </h3>
                    <Card.Img
                        src={randomBooks?.volumeInfo?.imageLinks?.smallThumbnail}
                        style={{
                            width: "75%",
                            height: "fit-content",
                            marginLeft: "12.5%",
                            marginTop: "5%",
                        }}/>
                    <Card.Body style={{ marginTop: "0px" }}>
                        <h5 className="title">{randomBooks?.volumeInfo?.title}</h5>
                        <Card.Text>
                            <div className="author" style={{ textDecoration: "underline" }}>
                                {randomBooks?.volumeInfo?.authors}
                            </div>
                            <div>
                                {randomBooks?.volumeInfo?.publisher} {randomBooks?.volumeInfo?.publishedDate}
                            </div>
                        </Card.Text>
                        <div className="randomBooksButtons">
                            <div className="linkInfo" style={{display: 'flex', justifyContent: "space-between", marginTop: "20px", marginBottom: '0px'}}>
                                <a href={randomBooks?.volumeInfo?.infoLink} target="_blank" className="link-success info">
                                    More Info
                                </a>
                                <a href={randomBooks?.volumeInfo?.previewLink} 
                                target =  "_blank" className="link-success info"
                                style={{ marginLeft: "40px" }}>
                                    Preview
                                </a>
                            </div>
                        </div>
                    </Card.Body>
                    <BookButton setButton={setButton} apiFetch={NYTAPIFetch} />
                </Card>
            </>
        )
    } else {
        return (
            <section style={{width: '30%', marginLeft: '175px', marginTop: '150px'}}>
                <h4 style={{margin: "5px" }}>Book Button</h4>
                <div style={{margin: "5px", marginTop: '15px', marginBottom: '25px'}}>
                    Press this button to get a recommendation based on current New York Times Bestsellers!
                </div>
                <BookButton setButton={setButton} apiFetch={setRandom} />
            </section>
        )
    }
}