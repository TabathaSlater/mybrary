import { BookButton } from "./BookButton"
import { Card } from 'react-bootstrap'

export const RandomBookCard = ({ randomBooks, setButton, NYTAPIFetch }) => {
    return (
        <Card
            style={{
                width: "18rem",
                color: "#2D4B4D",
                border: "0px",
                marginLeft: "175px",
                marginRight: '250px'
            }}>
            <h3
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "0px",
                    marginTop: "10px"
                }}
            >Book Button
            </h3>
            <Card.Img
                src={randomBooks?.volumeInfo?.imageLinks?.smallThumbnail}
                style={{
                    width: "75%",
                    height: "fit-content",
                    marginLeft: "12.5%",
                    marginTop: "5%",
                }} />
            <Card.Body
                style={{ marginTop: "0px" }}>
                <h5 className="title">
                    {randomBooks?.volumeInfo?.title}</h5>
                <Card.Text>
                    <div className="author"
                        style={{ textDecoration: "underline" }}>
                        {randomBooks?.volumeInfo?.authors}
                    </div>
                    <div>
                        {randomBooks?.volumeInfo?.publisher} {randomBooks?.volumeInfo?.publishedDate}
                    </div>
                </Card.Text>
                <div className="randomBooksButtons">
                    <div className="linkInfo"
                        style={{
                            display: 'flex',
                            justifyContent: "space-between",
                            marginTop: "20px",
                            marginBottom: '0px'
                        }}>
                        <a
                            href={randomBooks?.volumeInfo?.infoLink}
                            target="_blank"
                            className="link-success info"
                        >More Info
                        </a>
                        <a
                            href={randomBooks?.volumeInfo?.previewLink}
                            target="_blank"
                            className="link-success info"
                            style={{ marginLeft: "40px" }}
                        >Preview
                        </a>
                    </div>
                </div>
            </Card.Body>
            <BookButton
                setButton={setButton}
                apiFetch={NYTAPIFetch} />
        </Card>
    )
}