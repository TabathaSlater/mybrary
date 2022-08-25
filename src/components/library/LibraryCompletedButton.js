import { Button } from "react-bootstrap";

export const LibraryCompletedButton = ({
  current,
  fetchFunction
}) => {
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);


  const handleSaveButtonClick = () => {
    // event.preventDefault();

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${year}-${month}-${day}`;

    // TODO: Create the object to be saved to the API
    const objectToSendToAPI = {
      title: current.title,
      author: current.author,
      bookCover: current.bookCover,
      publishedDate: current.publishedDate,
      publisher: current.publisher,
      infoLink: current.infoLink,
      favorite: "",
      dateComplete: fullDate,
      statusId: 1,
      userId: mybraryUserObject.id,
    };

    // TODO: Perform the fetch() to PUT the object to the API
    return fetch(`http://localhost:8088/books/${current.id}`, {
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
      >
        Mark as Read
      </Button>
    </>
  );
};
