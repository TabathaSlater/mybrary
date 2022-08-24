import { Statistics } from "./BookStatistics"
import { CurrentBook } from "./CurentBook"
import './books.css'
import { BookGoals } from "../goals/BookGoals"


export const Books = () => {
    return (
    <>
    <article className="bookContent">
        
        <div className="statistics">
            <Statistics />
        <div className="goals">
            <BookGoals />
        </div>
        </div>
        <div className="currentBook">
          <CurrentBook />
        </div>

    </article>
    </>
    )
}