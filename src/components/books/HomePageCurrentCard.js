import { CompletedButton } from "./CompletedButton";
import { Card } from 'react-bootstrap'

//Component to build card for current book on homepage. Parent is CurrentBook.js
export const HomePageCurrentCard = ({ current, setCurrent }) => {
    return (
        <Card
            className="wholeCurrentCard"
            style={{
                width: "18rem",
                color: "#2D4B4D",
                border: "0px",
                marginTop: "30px"
            }}>
            <h3
                className="currentHeading"
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                Currently Reading
            </h3>
            <Card.Img
                src={current.bookCover}
                style={{
                    width: "75%",
                    height: "fit-content",
                    marginLeft: "12.5%",
                    marginTop: "6%",
                }} />
            <Card.Body
                style={{ marginTop: "0px" }}>
                <h5 className="title">
                    {current.title}</h5>
                <Card.Text>
                    <div className="author"
                        style={{ textDecoration: "underline" }}>
                        {current.author}
                    </div>
                    <div>
                        {current.publisher} {current.publishedDate}
                    </div>
                </Card.Text>
                <div className="currentButtons">
                    <div className="linkInfo">
                        <a
                            href={current.infoLink}
                            target="_blank"
                            className="link-success info"
                        >More Info
                        </a>
                        <a
                            href="/library"
                            className="link-success info"
                            style={{ marginLeft: "40px" }}
                        >View all books
                        </a>
                    </div>
                    <CompletedButton
                        current={current}
                        setCurrent={setCurrent} />
                </div>
            </Card.Body>
        </Card>
    )
}