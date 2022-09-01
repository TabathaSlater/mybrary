import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";


//Responsible for building book cards to be displayed in searchResults.js/ on find books page
export const SearchedBookCard = ({ book, addToCurrent, addToWant }) => {
  //responsible for showing or closing modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className="cardBox">
        <Card.Img className="img_search_card"
          top
          src={book?.volumeInfo?.imageLinks?.smallThumbnail}
          alt={book?.volumeInfo?.title}
        />
        <Card.Body>
          <h5 className="searchCard_body_header">
            {book?.volumeInfo?.title}
          </h5>
          <div>
            <Card.Text
              style={{ textDecoration: "underline" }}
            >By {book?.volumeInfo?.authors}
            </Card.Text>
            <Card.Text>
              {book?.volumeInfo?.publisher} {book?.volumeInfo?.publishedDate}
            </Card.Text>
          </div>
          <div className="cardBody_text">
            <Button
              onClick={handleShow}
              variant="warning"
              style={{ margin: "1.5%", width: "60%" }}
            >More info
            </Button>
            <Button
              variant="secondary"
              style={{ margin: "1.5%", width: "75%" }}
              onClick={(e) => {
                addToWant(e, book);
              }}
            >Want to Read
            </Button>
            <Button
              id="currentBtn"
              style={{ margin: "1.5%", width: "85%" }}
              onClick={(e) => {
                addToCurrent(e, book);
              }}
            >Add to Current
            </Button>
          </div>
        </Card.Body>

        {/* Modal starts here */}
        <Modal show={show}>
          <div
            style={{ backgroundColor: "#f2e9e4" }}
            className="modal-header d-flex justify-content-center">
            <h5
              className="modal-title text-center" id="exampleModalLabel">
              {book?.volumeInfo?.title}
            </h5>
          </div>
          <div
            className="modal-body"
            style={{ backgroundColor: "#d5bdaf" }}>
            <div
              className="d-flex justify-content-between ml-3">
              <img
                src={book?.volumeInfo?.imageLinks?.smallThumbnail}
                alt={book?.volumeInfo?.title}
                style={{ height: "233px" }}
              />
              <div
                style={{ marginLeft: "20px" }}>
                <p>Page Count: {book?.volumeInfo?.pageCount}</p>
                <p>Authors: {book?.volumeInfo?.authors}</p>
                <p>
                  Publisher: {book?.volumeInfo?.publisher}{" "}
                  {book?.volumeInfo?.publishedDate}
                </p>
              </div>
            </div>
            <div
              className="mt-3">
              {book?.searchInfo?.textSnippet.replace(/[&\/||#+;-?*<>{}]/g, "")}
            </div>
          </div>
          <Modal.Footer
            className="modal-footer modal_footer_card">
            <div>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{ marginLeft: "10px" }}
              >Close
              </Button>
            </div>
            <div
              className="left-silde left_card">

              <a
                href={book?.volumeInfo?.previewLink}
                target='_blank'
                className="btn-link link-secondary"
                color="default"
                type="button"
                rel="noopener noreferrer"
              >Preview
              </a>

              <a
                href={book?.volumeInfo?.infoLink}
                target='_blank'
                className="btn-link link-secondary"
                color="default"
                type="button"
                rel="noopener noreferrer"
              >Info
              </a>
            </div>
          </Modal.Footer>
        </Modal>
      </Card>
    </>
  );
};
