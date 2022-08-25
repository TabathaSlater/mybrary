import { CurrentBook } from "./CurentBook"
import './books.css'
import { BookGoals } from "../goals/BookGoals"
import { BookStatistics } from "./BookStatistics"


export const Books = () => {
    return (
        <>
            <article className="bookContent">

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="statistics" style={{ marginBottom: "100px" }}>
                        <BookStatistics />
                    </div>
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