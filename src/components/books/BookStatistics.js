import { useState, useEffect } from "react"
import { Container } from 'react-bootstrap'
// Show readers how many books they've read overall
// show readers how many books they've read over a given amount of time
// show readers the average number of books they read each month
// ToDo
//      : fetch data from books
//      : reference the taskStatistics component you made in Nutshell for examples of finding averages


export const BookStatistics = () => {
    const [totalBooks, setTotalBooks] = useState([])

    const fetchBookData = () => {
        return fetch('http://localhost:8088/books')
            .then(response => response.json())
            .then((books) => {
                setTotalBooks(books)
            })
    }

    useEffect(
        () => {
            fetchBookData()
        }, [])

    const readBooks = totalBooks.filter((book) => book.statusId === 1)

    const totalRead = readBooks.length

    const averageToRound = readBooks.length / 12
    // const averageToRound = readBooks.length / (date of first completed book - current date)
    const averagePerMonth = averageToRound.toFixed(1)


    return (
        <Container>
            <div>
                <h5 style={{ display: "flex", justifyContent: "center" }}>Total Books Read:</h5>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    {totalRead}
                </div>
                <h5 style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>Average Books per Month</h5>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    {averagePerMonth}
                </div>
            </div>
        </Container>
    )

}