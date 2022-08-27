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

  const deleteGoal = (goal) => {
    return fetch(`http://localhost:8088/goals/${goal.id}`, {
      method: "DELETE"
    })
      // .then(response => response.json())
      .then(fetchGoals)

  }

  //fetch goals from database
  const fetchGoals = () => {
    fetch(`http://localhost:8088/goals?userId=${mybraryUserObject.id}`)
      .then((response) => response.json())
      .then((goalList) => {
        setGoal(goalList);
      });
  }

  useEffect(
  () => {
    fetchGoals()
  },
  []
  )
if (goals.length > 0) {
  return (
    <Container style={{borderTop: "solid 5px whitesmoke", paddingTop: "50px"}}>
      <h3
        className="GoalHeading"
        style={{ display: "flex", justifyContent: "center", marginBottom: '35px'}}
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
                  <a
                    onClick={(e) => {
                      deleteGoal(goal);
                    }}
                    className="btn-link link-danger"
                    color="secondary"
                    type="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Delete
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
        <GoalForm handleClose={handleClose} fetchGoals={fetchGoals}/>
      </Modal>

      <Modal show={showEdit}>
        <GoalEdit handleCloseEdit={handleCloseEdit} goalId={goalId} fetchGoals={fetchGoals}/>
      </Modal>

      <Modal show={showCompleted}>
        <CompletedGoals
          handleCloseCompleted={handleCloseCompleted}
          setGoal={setGoal}
          fetchGoals={fetchGoals}
        />
      </Modal>
    </Container>
  )} else {
     return (
      <section>
      <h3
        style={{ display: "flex", justifyItems: "center"}}
      >
        Reading Goals
      </h3>
      <div>
        Get started by adding some goals!

        <Button
          style={{ marginTop: "15px", display: "flex" }}
          variant="success"
          className="addGoalButton"
          onClick={handleShow}>
          Add Goal
        </Button>

        <Modal show={show}>
        <GoalForm handleClose={handleClose} fetchGoals={fetchGoals}/>
      </Modal>

      </div>
      </section>
     )

  }
}
