import { BookButton } from "./BookButton"
import { Card } from 'react-bootstrap'

export const RandomBookCard = ({ randomBooks, setButton, NYTAPIFetch }) => {
    return (
        <Card className="random_card">
            <h3 className="bookButton_h3"
            >Book Button
            </h3>
            <Card.Img className="random_card_img"
                src={randomBooks?.volumeInfo?.imageLinks?.smallThumbnail} />
            <Card.Body>
                <h5 className="title">
                    {randomBooks?.volumeInfo?.title}</h5>
                <Card.Text>
                    <div className="random_author">
                        {randomBooks?.volumeInfo?.authors}
                    </div>
                    <div className="random_publishDate">
                        {randomBooks?.volumeInfo?.publisher}
                    </div>
                    <div>
                        {randomBooks?.volumeInfo?.publishedDate}
                    </div>
                </Card.Text>
                <div className="randomBooksButtons">
                    <div className="random_link_info">
                        <a
                            href={randomBooks?.volumeInfo?.infoLink}
                            target="_blank"
                            className="link-success"
                        >More Info
                        </a>
                        <a
                            href={randomBooks?.volumeInfo?.previewLink}
                            target="_blank"
                            className="link-success random_preview"
                        >Preview
                        </a>
                    </div>
                    <BookButton
                        setButton={setButton}
                        apiFetch={NYTAPIFetch} />
                </div>
            </Card.Body>
        </Card>
    )
}