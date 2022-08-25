import { useState } from "react"
// Show readers how many books they've read overall
// show readers how many books they've read over a given amount of time
// show readers the average number of books they read each month
// ToDo
//      : fetch data from books
//      : reference the taskStatistics component you made in Nutshell for examples of finding averages


export const Statistics = () => {
    const [totalBooks, setTotalBooks] = useState([])

    const fetchBookData = () => {
        return fetch('')
        .then(response => response.json())
        .then(() => {
        
        })
        
    }

    return (
        <></>
    )

}