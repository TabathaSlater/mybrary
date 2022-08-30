import { useEffect, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { GoalForm } from "./GoalForm";
import { GoalEdit } from "./GoalEdit";
import { CompletedGoals } from "./CompletedGoals";
import "./goals.css";
import { GoalCard } from "./GoalCard";

export const BookGoals = () => {
  const [goals, setGoal] = useState([]);

  //State for managing GoalForm modal open and close for adding goals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //State for managing open and close of modal that edits goals
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  //State for managing open and close of modal for completed goals
  const [showCompleted, setShowCompleted] = useState(false);
  const handleCloseCompleted = () => setShowCompleted(false);
  const handleShowCompleted = () => setShowCompleted(true);

  //State used to represent the id of an individual goal
  const [goalId, setGoalId] = useState("");

  //pull user info from local storage
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //function to delete a specific goal from database
  const deleteGoal = (goal) => {
    return fetch(`http://localhost:8088/goals/${goal.id}`, {
      method: "DELETE"
    })
      //grab state of goals to refresh list
      .then(fetchGoals)

  }

  //fetch goals matching user from database
  const fetchGoals = () => {
    fetch(`http://localhost:8088/goals?userId=${mybraryUserObject.id}`)
      .then((response) => response.json())
      .then((goalList) => {
        //set users goals to state
        setGoal(goalList);
      });
  }

  //Fetch goals function on load
  useEffect(
    () => {
      fetchGoals()
    },
    []
  )

  //Conditional to show goals if they exist, or a propmpt to add goals if none exist
  if (goals.length > 0) {
    return (
      <Container className="goals_container">
        <h3
          className="goalHeading"
        >Reading Goals
        </h3>
        <article>

          {/* Component for building goals list */}
          <GoalCard
            goals={goals}
            setGoal={setGoal}
            setGoalId={setGoalId}
            deleteGoal={deleteGoal}
            handleShowEdit={handleShowEdit} />

        </article>

        {/* Button for adding goal */}
        <div className="goalButtons">
          <Button
            variant="success"
            className="addGoalButton"
            onClick={handleShow}
          >Add Goal
          </Button>

          {/* Button for marking goal as complete */}
          <Button
            variant="secondary"
            className="addGoalButton"
            onClick={handleShowCompleted}
          >Completed
          </Button>
        </div>

        {/* Modal for GoalForm (adding goals) */}
        <Modal show={show}>
          <GoalForm handleClose={handleClose} fetchGoals={fetchGoals} />
        </Modal>

        {/* Modal for editing goals */}
        <Modal show={showEdit}>
          <GoalEdit handleCloseEdit={handleCloseEdit} goalId={goalId} fetchGoals={fetchGoals} />
        </Modal>

        {/* Modal for shoing completed goals */}
        <Modal show={showCompleted}>
          <CompletedGoals
            handleCloseCompleted={handleCloseCompleted}
            setGoal={setGoal}
            fetchGoals={fetchGoals}
          />
        </Modal>
        
      </Container>
    )

  } else {
    return (

      // Prompt to add goals if none exist
      <section>
        <h3 className="goal_prompt"
        >Reading Goals
        </h3>
        <div className="goals_alert_prompt">
          Get started by adding some goals!

          <Button
            variant="success"
            className="addGoalButton"
            onClick={handleShow}
          >Add Goal
          </Button>

          <Modal show={show}>
            <GoalForm
              handleClose={handleClose}
              fetchGoals={fetchGoals} />
          </Modal>

        </div>
      </section>
    )
  };
};
