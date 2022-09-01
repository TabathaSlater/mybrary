import { CompletedButton } from "./CompletedButton";
import { Card } from 'react-bootstrap'
import './books.css'


//Component to build card for current book on homepage. Parent is CurrentBook.js
export const HomePageCurrentCard = ({ current, setCurrent, setRefresh }) => {
    return (
        <Card className="wholeCurrentCard">
            <h3 className="currentHeading"
            >Currently Reading
            </h3>
            <Card.Img className="current_img"
                src={current.bookCover} />
            <Card.Body className="card_body_current">
                <h5 className="title">
                    {current.title}</h5>
                <Card.Text>
                    <div className="author">
                        {current.author}
                    </div>
                    <div className="random_publishDate">
                        {current.publisher}
                    </div>
                    <div>
                        {current.publishedDate}
                    </div>
                </Card.Text>
                <div className="currentButtons">
                    <div className="linkInfo">
                        <a
                            href={current.infoLink}
                            target="_blank"
                            className="link-success more_info"
                        >More Info
                        </a>
                        <a
                            href="/library"
                            className="link-success info"
                        >View all books
                        </a>
                    </div>
                    <CompletedButton
                        current={current}
                        setCurrent={setCurrent}
                        setRefresh={setRefresh} />
                </div>
            </Card.Body>
        </Card>
    )
}