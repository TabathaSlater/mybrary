import {Card} from 'react-bootstrap'
import {AddToCurrent} from "./AddToCurrentButton"
import './library.css'

export const WantToReadCard = ({want, setWant, fetchFunction}) => {
    return (

        <article className="library_article_wrap">
            {want.map((book) => {
                return (
                    <Card className="library_completed_card"
                        key={book.id}>
                        <Card.Img className="library_card_img"
                            src={book.bookCover} />
                        <Card.Body style={{ marginTop: "0px" }}>
                            <h5 className="library_title">
                                {book.title}
                            </h5>
                            <Card.Text>
                                <div
                                    className="library_author">
                                    {book.author}
                                </div>
                                <div className="library_publish">
                                    <div>
                                        {book.publisher}
                                    </div>
                                    <div>
                                        {book.publishedDate}
                                    </div>
                                </div>
                            </Card.Text>
                            <div className="library_links">
                                <div className="library_more_info">
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