import { BookGoals } from "./BookGoals"
import { Statistics } from "./BookStatistics"
import { CurrentBook } from "./CurentBook"
import './books.css'


export const Books = () => {
    return (
    <>
    <article className="bookContent">
        
        <div className="statistics">
            <Statistics />
        </div>
        <div className="currentBook">
          <CurrentBook />
        </div>
        <div className="goals">
            <BookGoals />
        </div>

    </article>
    </>
    )
}