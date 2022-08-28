import { Button } from "react-bootstrap";

//Component responsible for marking books as complete
export const LibraryCompletedButton = ({ book, fetchFunction }) => {
  //get current user info
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //responsible for putting relevant/updated information for books marked complete
  const handleSaveButtonClick = () => {

    //______Date grabbing starts here_________
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = date.getTime()

    let fullDate = `${year}-${month}-${day}`;
    let dateTime = time
    //_____Date grabbing ends here_____________

    //Create the object to be saved to the API
    const objectToSendToAPI = {
      title: book.title,
      author: book.author,
      bookCover: book.bookCover,
      publishedDate: book.publishedDate,
      publisher: book.publisher,
      infoLink: book.infoLink,
      favorite: "",
      dateComplete: fullDate,
      dateTime: dateTime,
      statusId: 1,
      userId: mybraryUserObject.id,
    };

    // Perform the fetch() to PUT the object to the API and refresh state of books list (from parent component) with the updates
    return fetch(`http://localhost:8088/books/${book.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectToSendToAPI),
    })
      .then((response) => response.json())
      .then(fetchFunction)

  };

  return (
    <>
      <Button
        style={{ marginTop: "1.5%" }}
        variant="secondary"
        className="addToRead"
        onClick={(clickEvent) => {
          handleSaveButtonClick();
        }}
      >Mark as Read
      </Button>
    </>
  );
};
