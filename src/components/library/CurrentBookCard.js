import { Card} from 'react-bootstrap'
import { LibraryCompletedButton } from "./LibraryCompletedButton";
import './library.css'

export const CurrentBookCard = ({ current, fetchFunction }) => {
  return (
    <article className='library_article_wrap'>
      {current.map((book) => {
        return (
            <Card
              className="library_current-card"
              key={book.id}>
              <Card.Img className='library_card_img'
                src={book.bookCover}/>
              <Card.Body 
              style={{ marginTop: "0px" }}>
                <h5
                  className="library_title">
                  {book.title}
                </h5>
                <Card.Text>
                  <div
                    className="library_author">
                    {book.author}
                  </div>
                  <div className='library_publish'>
                    <div>
                      {book.publisher}
                    </div><div>
                      {book.publishedDate}
                    </div></div>
                </Card.Text>
                <div className='library_links'>
                  <div className='library_more_info'>
                    <a href={book.infoLink}
                      target='_blank'
                      className="link-success info">
                      More Info
                    </a>
                  </div>
                  <LibraryCompletedButton
                    book={book}
                    fetchFunction={fetchFunction} />
                </div>
              </Card.Body>
            </Card>
        );
      })}
    </article>
  )
}