import { useState, useEffect } from "react"
import { Container } from 'react-bootstrap'
import './books.css'

// Show readers how many books they've read overall
// show readers how many books they've read over a given amount of time
// show readers the average number of books they read each month
// ToDo
//     X : fetch data from books
//     X : reference the taskStatistics component you made in Nutshell for examples of finding averages


export const BookStatistics = () => {
    const [totalRead, setTotalRead] = useState(0)
    const [booksReadAvg, setBooksRead] = useState(0)

    //Fetch current user info from local storage
    const localMybraryUser = localStorage.getItem("mybrary_user");
    const mybraryUserObject = JSON.parse(localMybraryUser);

    //All calculations must be done in a function for the fetch so that they all run after the data is retrieved
    const fetchBookData = () => {
        return fetch(`http://localhost:8088/books?userId=${mybraryUserObject.id}`)
            .then(response => response.json())
            .then((books) => {

                //Grab current dateTime to use in averages calculation
                let fullDate = new Date().getTime();

                //Grab all books that have been marked read/complete
                const readBooks = books.filter((book) => book.statusId === 1)

                //Sort read books to obtain the first completed book
                const sortOld = [...readBooks].sort((objA, objB) => {
                    objA = objA.dateComplete.split('-')
                    objB = objB.dateComplete.split('-')
                    return (objA[2] - objB[2] || objA[1] - objB[1] || objA[0] - objB[0])
                });

                //Set first completed book to a variable
                const oldestBook = sortOld[0]

                //Extract dateTime property to compare to current dateTime
                const timeRead = oldestBook.dateTime

                //Calculate the difference from todays date and the date of first completed book
                const differenceInTime = fullDate - timeRead

                //Convert the time difference to days difference
                const differenceInDays = differenceInTime / (1000 * 3600 * 24)

                //Convert number of days to number of months
                const numberOfMonths = () => {
                    if (differenceInDays < 30) {
                        let monthNumber = 1
                        return monthNumber
                    } else {
                        let monthNumber = differenceInDays / 30
                        return monthNumber
                    }
                }
                //Grab Total number of books completed  
                setTotalRead(readBooks.length)

                //Calculate the average books completed per month since first book was complete by taking the total books read divided by the number of months since first completed book
                setBooksRead(readBooks.length / numberOfMonths())
            })
    }

    //useEffect to run all calculations and fetches on load
    useEffect(
        () => {
            fetchBookData()
        }, [])

    return (
        <Container>
            <div>
                <h5 className="total_books_h5"
                >Total Books Read:</h5>

                <div className="total_read">
                    {totalRead}
                </div>

                <h5 className="average_books_h5"
                >Average Books per Month: </h5>

                <div className="books_read_avg">
                    {booksReadAvg}
                </div>
            </div>
        </Container>
    )

}