import { CurrentBook } from "./CurentBook"
import './books.css'
import { BookGoals } from "../goals/BookGoals"
import { BookStatistics } from "./BookStatistics"
import { RandomBook } from "./RandomBook"

//Main landing page on /home
export const Books = () => {

    //return all children components that make up home page
    return (
        <section className="booksjs_container">

            {/* Dive contains the current book component */}
            <div className="currentBook">
                <CurrentBook />
            </div>

            {/* This div contains both the statistics component and the goals component */}
            <div className="stats_goals_div">

                <div className="statistics">
                    <BookStatistics />
                </div>

                <div className="goals">
                    <BookGoals />
                </div>
            </div>

            {/* Div contains random book generator component */}
            <div className="book_generator">
                <RandomBook />
            </div>

        </section>
    )
}