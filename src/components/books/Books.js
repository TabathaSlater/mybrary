import { CurrentBook } from "./CurentBook"
import './books.css'
import { BookGoals } from "../goals/BookGoals"
import { BookStatistics } from "./BookStatistics"
import { RandomBook } from "./RandomBook"

//Main landing page on /home
export const Books = () => {

    //return all children components that make up home page
    return (
        <section
            style={{
                marginTop: "45px",
                display: "flex",
                justifyContent: "center",
                justifyContent: "space-evenly"
            }}>

            {/* Dive contains the current book component */}
            <div className="currentBook"
                style={{
                    borderRight: "solid 5px whitesmoke",
                    paddingRight: "175px",
                    marginLeft: '10%'
                }}>
                <CurrentBook />
            </div>

            {/* This div contains both the statistics component and the goals component */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "5%",
                    marginRight: '5%',
                    width: '33%'
                }}>
                <div className="statistics"
                    style={{ marginBottom: "50px" }}>
                    <BookStatistics />
                </div>
                <div className="goals">
                    <BookGoals />
                </div>
            </div>

            {/* Div contains random book generator component */}
            <div
                style={{
                    borderLeft: "solid 5px whitesmoke",
                    marginTop: '25px'
                }}>
                <RandomBook />
            </div>

        </section>
    )
}