import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";

export const GoalEdit = ({ handleCloseEdit, goalId }) => {
  const [goal, updateGoal] = useState({
    goal: "",
  });

  //Variable storing route parameter
  const navigate = useNavigate();

  //Get goal data specific to goal selected from database
  useEffect(() => {
    fetch(`http://localhost:8088/goals/${goalId}`)
      .then((response) => response.json())
      .then((data) => {
        updateGoal(data);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    // TODO: Perform the fetch() to PUT the object
    return fetch(`http://localhost:8088/goals/${goal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    }).then((response) => response.json());
  };

  return (
    <Container>
      <Form className="goalForm">
        <Form.Label>Edit your goal</Form.Label>
        <Form.Control
          type="text"
          placeholder={goal.goal}
          value={goal.goal}
          onChange={(e) => {
            const copy = { ...goal };
            copy.goal = e.target.value;
            updateGoal(copy);
          }}
        />
      </Form>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="secondary"
          style={{ margin: "1.5%" }}
          onClick={(clickEvent) => {
            handleCloseEdit(clickEvent);
          }}
        >
          Close
        </Button>
        <Button
          variant="success"
          style={{ margin: "1.5%" }}
          onClick={(clickEvent) => {
            handleSaveButtonClick(clickEvent);
            handleCloseEdit(clickEvent);
          }}
        >
          Save
        </Button>
      </div>
    </Container>
  );
};
