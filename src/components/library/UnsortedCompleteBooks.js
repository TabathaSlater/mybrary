import { SortCompleted } from "./SortCompleted";
import { Button, Card } from 'react-bootstrap'

//Function for unsorted books in completed component
export const UnsortedCompleteBooks = ({ setSortedBooks, completed, deleteBook }) => {
    return (
        <article>
            <div
                style={{
                    marginLeft: "15px",
                    marginTop: "15px"
                }}>
                {/* Component responsible for building sort dropdown */}
                <SortCompleted setSortedBooks={setSortedBooks} />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                {completed.completed.map((book) => {
                    return (
                        <Card
                            className="Card"
                            style={{
                                width: "13rem",
                                height: "35rem",
                                color: "#2D4B4D",
                                border: "0px",
                                margin: "1%",
                                marginTop: "25px"
                            }}
                            key={book.id}>
                            <Card.Img
                                src={book.bookCover}
                                style={{
                                    width: "75%",
                                    height: "14rem",
                                    marginLeft: "12.5%",
                                    marginTop: "6%",
                                }} />
                            <Card.Body
                                style={{ marginTop: "0px" }}>
                                <h5
                                    className="title"
                                    style={{
                                        marginTop: "1.5%",
                                        marginBottom: "3%"
                                    }}>
                                    {book.title}
                                </h5>
                                <Card.Text>
                                    <div
                                        className="author"
                                        style={{ textDecoration: "underline" }}>
                                        {book.author}
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <div>
                                            {book.publisher}
                                        </div><div>
                                            {book.publishedDate}
                                        </div></div>
                                </Card.Text>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        flexDirection: "column",
                                    }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginRight: '10px'
                                        }}>
                                        <a href={book.infoLink}
                                            target='_blank'
                                            className="link-success info">
                                            More Info
                                        </a>
                                    </div>
                                    <Button variant="danger"
                                        style={{ marginTop: "1.5%" }}
                                        onClick={(e) => {
                                            deleteBook(book)
                                        }}
                                    >Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </article>
    )
}