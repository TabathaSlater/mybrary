import { useEffect, useState } from "react";
import { Container, ListGroup, Button, Modal } from "react-bootstrap";
import { Checkbox } from "./Checkbox";
import { GoalForm } from "./GoalForm";
import { GoalEdit } from "./GoalEdit";
import { CompletedGoals } from "./CompletedGoals";
import "./goals.css";

export const BookGoals = () => {
  const [goals, setGoal] = useState([]);

  //State for managing GoalForm modal open and close
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [showCompleted, setShowCompleted] = useState(false);
  const handleCloseCompleted = () => setShowCompleted(false);
  const handleShowCompleted = () => setShowCompleted(true);

  const [goalId, setGoalId] = useState("");

  //pull user info from local storage
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //fetch goals from database
  useEffect(() => {
    fetch(`http://localhost:8088/goals?userId=${mybraryUserObject.id}`)
      .then((response) => response.json())
      .then((goalList) => {
        setGoal(goalList);
      });
  }, []);

  return (
    <Container>
      <h3
        className="GoalHeading"
        style={{ display: "flex", justifyContent: "center", color: "#2D4B4D" }}
      >
        Reading Goals
      </h3>
      <article>
        {goals.map((goal) => {
          if (goal.completed === false) {
            return (
              <ListGroup
                key={`goal--${goal.id}`}
                variant="flush"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px",
                }}
              >
                <div className="goalList">
                  <Checkbox goalProp={goal} setState={setGoal} />
                  <section
                    style={{
                      marginLeft: "6px",
                      textDecoration: "underline",
                      margin: "10px",
                    }}
                  >
                    {goal.goal}
                  </section>
                  <a
                    onClick={() => {
                      handleShowEdit();
                      setGoalId(goal.id);
                    }}
                    className="btn-link link-success"
                    color="secondary"
                    type="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Edit
                  </a>
                </div>
              </ListGroup>
            );
          }
        })}
      </article>
      <div className="goalButtons">
        <Button
          style={{ marginTop: "15px", display: "flex" }}
          variant="success"
          className="addGoalButton"
          onClick={handleShow}
        >
          Add Goal
        </Button>
        <Button
          style={{ marginTop: "15px", display: "flex" }}
          variant="secondary"
          className="addGoalButton"
          onClick={handleShowCompleted}
        >
          Completed
        </Button>
      </div>
      {/* <Button style={{marginTop: "15px", display: "flex"}} variant="secondary" className="viewCompletedButton"
        onClick={}>View Completed</Button> */}
      <Modal show={show}>
        <GoalForm handleClose={handleClose} />
      </Modal>

      <Modal show={showEdit}>
        <GoalEdit handleCloseEdit={handleCloseEdit} goalId={goalId} />
      </Modal>

      <Modal show={showCompleted}>
        <CompletedGoals
          handleCloseCompleted={handleCloseCompleted}
          goals={goals}
          setGoal={setGoal}
        />
      </Modal>
    </Container>
  );
};
