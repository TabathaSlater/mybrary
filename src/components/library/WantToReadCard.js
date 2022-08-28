import {Card} from 'react-bootstrap'
import {AddToCurrent} from "./AddToCurrentButton"

export const WantToReadCard = ({want, setWant, fetchFunction}) => {
    return (

        <article
            style={{
                display: "flex",
                flexDirection: "row"
            }}>
            {want.map((book) => {
                return (
                    <Card
                        className="Card"
                        style={{
                            width: "13rem",
                            height: "35rem",
                            color: "#2D4B4D",
                            border: "0px",
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
                        <Card.Body style={{ marginTop: "0px" }}>
                            <h5
                                className="title"
                                style={{ marginTop: "1.5%" }}>
                                {book.title}
                            </h5>
                            <Card.Text>
                                <div
                                    className="author"
                                    style={{ textDecoration: "underline" }}>
                                    {book.author}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                    <div>
                                        {book.publisher}
                                    </div>
                                    <div>
                                        {book.publishedDate}
                                    </div>
                                </div>
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
                                    <a
                                        href={book.infoLink}
                                        target='_blank'
                                        className="link-success"
                                    >More Info
                                    </a>
                                </div>
                                <AddToCurrent
                                    book={book}
                                    setWant={setWant}
                                    fetchFunction={fetchFunction} />
                            </div>
                        </Card.Body>
                    </Card>
                );
            })}
        </article>
    )
}