import {Button} from 'react-bootstrap'

export const BookButton = ({setButton, apiFetch}) => {
    return (
        <>
        <Button style={{ marginTop: "0px", width: '100%'}} variant="success" onClick={() => {setButton(true)
                         apiFetch()}}>
            Generate Book
        </Button>
        </>
    )
}