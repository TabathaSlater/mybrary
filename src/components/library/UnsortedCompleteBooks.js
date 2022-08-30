import { SortCompleted } from "./SortCompleted";
import { Button, Card } from 'react-bootstrap'

//Function for unsorted books in completed component
export const UnsortedCompleteBooks = ({ setSortedBooks, completed, deleteBook }) => {
    return (
        <article>
            <div className="sorted_complete_div">
                {/* Component responsible for building sort dropdown */}
                <SortCompleted setSortedBooks={setSortedBooks} />
            </div>
            <div className="sorted_complete_row">
                {completed.completed.map((book) => {
                    return (
                        <Card
                            className="library_completed_card"
                            key={book.id}>
                            <Card.Img className="library_card_img"
                                src={book.bookCover} />
                            <Card.Body
                                style={{ marginTop: "0px" }}>
                                <h5
                                    className="library_title">
                                    {book.title}
                                </h5>
                                <Card.Text>
                                    <div className="library_author">
                                        {book.author}
                                    </div>
                                    <div className="library_publish">
                                        <div>
                                            {book.publisher}
                                        </div><div>
                                            {book.publishedDate}
                                        </div></div>
                                </Card.Text>
                                <div className="library_links">
                                    <div className="library_more_info">
                                        <a href={book.infoLink}
                                            target='_blank'
                                            className="link-success info">
                                            More Info
                                        </a>
                                    </div>
                                    <Button className="library_delete_btn"
                                        variant="danger"
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