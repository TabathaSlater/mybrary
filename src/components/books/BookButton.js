import { Button } from 'react-bootstrap'

// Returns the actual button that is clicked to generate a book in RandomBook.js
export const BookButton = ({ setButton, apiFetch }) => {
    return (
        <>
            <Button
                style={{
                    marginTop: "0px",
                    width: '100%'
                }}
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