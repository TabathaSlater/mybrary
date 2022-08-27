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
    const [totalRead, setTotalRead] = useState(0)
    const [booksReadAvg, setBooksRead] = useState(0)

    const localMybraryUser = localStorage.getItem("mybrary_user");
    const mybraryUserObject = JSON.parse(localMybraryUser);

    const fetchBookData = () => {
        return fetch(`http://localhost:8088/books?userId=${mybraryUserObject.id}`)
            .then(response => response.json())
            .then((books) => {
                let fullDate = new Date().getTime();
                
                
                const readBooks = books.filter((book) => book.statusId === 1)
                const sortOld = [...readBooks].sort((objA, objB) => {
                    objA = objA.dateComplete.split('-')
                    objB = objB.dateComplete.split('-')
                    return(objA[2] - objB[2] || objA[1] - objB[1] || objA[0] - objB[0])
                });
                
                const oldestBook = sortOld[0]
                const timeRead = oldestBook.dateTime
                
                const differenceInTime = fullDate - timeRead
                
                const differenceInDays = differenceInTime / (1000 * 3600 * 24)
                
                //#days/30 = #months
                const numberOfMonths = () => {
                    if (differenceInDays < 30) {
                        let monthNumber = 1
                        return monthNumber
                    } else {
                        let monthNumber = differenceInDays / 30
                        return monthNumber
                    }
                } 
                console.log(readBooks)
                setTotalRead(readBooks.length)
                
                // const averageToRound = readBooks.length / 12
                setBooksRead(readBooks.length / numberOfMonths())
                // const averagePerMonth = averageToRound.toFixed(1)
                setTotalBooks(books)
            })
    }

    useEffect(
        () => {
            fetchBookData()
        }, [])

    return (
        <Container>
            <div>
                <h5 style={{ display: "flex", justifyContent: "center", textDecoration: "underline", marginTop:"45px" }}>Total Books Read:</h5>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", fontSize: "25px", fontWeight: "bold" }}>
                    {totalRead}
                </div>
                <h5 style={{ display: "flex", justifyContent: "center", marginTop: "40px", textDecoration: "underline" }}>Average Books per Month: </h5>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", fontSize: "25px", fontWeight: "bold"  }}>
                    {booksReadAvg}
                </div>
            </div>
        </Container>
    )

}