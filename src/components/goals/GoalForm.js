import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

export const GoalForm = ({ handleClose, fetchGoals }) => {
  const [goal, setGoal] = useState({
    goal: "",
    completed: false,
    userId: "",
  });

  //Grab user info from local storage
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //handle post to database when object is created
  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    // TODO: Create the object to be saved to the API
    const ticketToSendToAPI = {
      userId: mybraryUserObject.id,
      goal: goal.goal,
      completed: false,
    };

    //Perform the fetch() to POST the object to the API and refresh state
    return fetch("http://localhost:8088/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketToSendToAPI),
    }).then((response) => response.json())
      .then(fetchGoals);
  };

  return (
    <Container>
      <Form className="goalForm">
        <h5 className="goal_form_heading">Add a new goal</h5>
        <Form.Control
          type="text"
          placeholder="Add your task"
          value={goal.goal}
          onChange={(e) => {
            const copy = { ...goal };
            copy.goal = e.target.value;
            setGoal(copy);
          }}
        />
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}>
        <Button
          variant="secondary"
          style={{ margin: "1.5%" }}
          onClick={(clickEvent) => {
            handleClose(clickEvent);
          }}
        >Close
        </Button>
        <Button
          variant="success"
          style={{ margin: "1.5%" }}
          onClick={(clickEvent) => {
            handleSaveButtonClick(clickEvent);
            handleClose(clickEvent);
          }}
        >Add Task
        </Button>
      </div>
    </Container>
  );
};