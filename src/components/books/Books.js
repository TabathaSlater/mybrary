import { CurrentBook } from "./CurentBook"
import './books.css'
import { BookGoals } from "../goals/BookGoals"
import { BookStatistics } from "./BookStatistics"
import { RandomBook } from "./RandomBook"


export const Books = () => {
    return (
        <section style={{marginTop: "5px", display: "flex", justifyContent: "center", justifyContent: "space-evenly"}}>

                <div className="currentBook" style={{borderRight: "solid 5px whitesmoke", paddingRight: "175px", marginLeft: '10%'}}>
                    <CurrentBook />
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "5%", marginRight: '5%', width:'33%' }}>
                    <div className="statistics" style={{ marginBottom: "50px" }}>
                        <BookStatistics />
                    </div>
                    <div className="goals">
                        <BookGoals />
                    </div>
                </div>
                <div style={{borderLeft: "solid 5px whitesmoke",  marginTop: '50px'}}><RandomBook/></div>

        </section>
    )
}