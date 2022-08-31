import { Button } from 'react-bootstrap'
import './books.css'

// Returns the actual button that is clicked to generate a book in RandomBook.js
export const BookButton = ({ setButton, apiFetch }) => {
    return (
        <>
            <Button
                className='book_button'
                variant="success"
                onClick={() => {
                    //set state for button so that parent component (randomBook.js) knows to display a book card
                    setButton(true)
                    //fetch new data from api so that relevant information is refreshed
                    apiFetch()

                }}
            >Generate Book
            </Button>
        </>
    )
};