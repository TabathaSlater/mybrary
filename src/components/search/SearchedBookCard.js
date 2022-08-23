import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap';
export const SearchedBookCard = ({thumbnail, title, authors, publisher, publishDate, description, previewLink, infoLink,pageCount}) => {


  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
    return (
      <Card className='cardBox' md style={{backgroundColor: "#e8e8e4", border: "0px"}}>
      <Card.Img
        top
        style={{ width: '75%', height: '17em', marginLeft: "12.5%", marginTop: "6%" }}
        src={thumbnail}
        alt={title}
      />
      <Card.Body>
      <Card.Title>{title}</Card.Title>
        <Card.Text style={{textDecoration: "underline"}}>By {authors}</Card.Text>
        <Card.Text>{publisher} {publishDate}</Card.Text>
        {/* <Card.Text>{description}</Card.Text> */}
        <Button id= "currentBtn" style={{margin: "1.5%"}}>Add to Current</Button>
        <Button variant="secondary" style={{margin: "1.5%"}}>Want to Read</Button>

        <Button onClick={handleShow} variant="light" style={{margin: "1.5%"}}>More info</Button>
      </Card.Body>
      <Modal show={show}>
        <div style={{backgroundColor: "#f2e9e4"}} className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
        </div>
        <div className='modal-body' style={{backgroundColor: "#d5bdaf"}}>
          <div className='d-flex justify-content-between ml-3'>
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div style={{marginLeft: "20px"}}>
              <p>Page Count: {pageCount}</p>
              <p>Authors: {authors}</p>
              <p>Publisher: {publisher} {publishDate}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
        <Modal.Footer className='modal-footer' style={{display: "flex", justifyContent: 'space-between', backgroundColor: "#f2e9e4"}}>
        <div>
        <Button  variant="secondary" onClick={handleClose} style={{marginLeft: '10px'}}>
            Close
          </Button>
        </div>
          <div className='left-silde' style={{display: "flex", justifyContent: 'space-evenly', flexDirection: 'row', marginRight: '10px'}}>
            <a
              href={previewLink}
              className='btn-link link-secondary'
              color='default'
              type='button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview
            </a>
          
            <a
              href={infoLink}
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
    )
}