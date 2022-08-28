import { Button } from "react-bootstrap"


//Button for marking a current book as complete
export const CompletedButton = ({ current, setCurrent }) => {

  //Grab current user info
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //Function to put completed book with updated relevant info to database
  const handleSaveButtonClick = () => {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${day}.${month}.${year}.`;

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
      userId: mybraryUserObject.id
    }

    //Perform the fetch() to PUT the object to the API
    return fetch(`http://localhost:8088/books/${current.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectToSendToAPI),
    })
      .then((response) => response.json())
      .then(() => {
        //Set new state of current book
        setCurrent()
      })


  }

  return (
    <>
      <Button
        style={{ marginTop: "15px" }}
        variant="secondary"
        className="readButton"
        onClick={(clickEvent) => handleSaveButtonClick()}>
        Mark as Read
      </Button>
    </>
  );
};
