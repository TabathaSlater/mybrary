import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap';
export const SearchedBookCard = ({book, addToCurrent}) => {


  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  
    return (
      <>
      <Card className='cardBox' style={{backgroundColor: "#e8e8e4", border: "0px"}}>
      <Card.Img
        top
        style={{ width: '75%', height: '17em', marginLeft: "12.5%", marginTop: "6%" }}
        src={book?.volumeInfo?.imageLinks?.smallThumbnail}
        alt={book?.volumeInfo?.title}
      />
      <Card.Body>
      <Card.Title>{book?.volumeInfo?.title}</Card.Title>
        <Card.Text style={{textDecoration: "underline"}}>By {book?.volumeInfo?.authors}</Card.Text>
        <Card.Text>{book?.volumeInfo?.publisher} {book?.volumeInfo?.publishedDate}</Card.Text>
        <Button id= "currentBtn" style={{margin: "1.5%"}}
        onClick={(e) => {
          addToCurrent(e, book)
        }}>Add to Current</Button>
        <Button variant="secondary" style={{margin: "1.5%"}}>Want to Read</Button>

        <Button onClick={handleShow} variant="light" style={{margin: "1.5%"}}>More info</Button>
      </Card.Body>
      <Modal show={show}>
        <div style={{backgroundColor: "#f2e9e4"}} className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {book?.volumeInfo?.title}
          </h5>
        </div>
        <div className='modal-body' style={{backgroundColor: "#d5bdaf"}}>
          <div className='d-flex justify-content-between ml-3'>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt={book?.volumeInfo?.title} style={{ height: '233px' }} />
            <div style={{marginLeft: "20px"}}>
              <p>Page Count: {book?.volumeInfo?.pageCount}</p>
              <p>Authors: {book?.volumeInfo?.authors}</p>
              <p>Publisher: {book?.volumeInfo?.publisher} {book?.volumeInfo?.publishedDate}</p>
            </div>
          </div>
          <div className='mt-3'>{book?.searchInfo?.textSnippet}</div>
        </div>
        <Modal.Footer className='modal-footer' style={{display: "flex", justifyContent: 'space-between', backgroundColor: "#f2e9e4"}}>
        <div>
        <Button  variant="secondary" onClick={handleClose} style={{marginLeft: '10px'}}>
            Close
          </Button>
        </div>
          <div className='left-silde' style={{display: "flex", justifyContent: 'space-evenly', flexDirection: 'row', marginRight: '10px'}}>
            <a
              href={book?.volumeInfo?.previewLink}
              className='btn-link link-secondary'
              color='default'
              type='button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview
            </a>
          
            <a
              href={book?.volumeInfo?.infoLink}
              className='btn-link link-secondary'
              color='default'
              type='button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Info
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </Card>
    </>)
}