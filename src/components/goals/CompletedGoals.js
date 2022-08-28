import { useEffect, useState } from "react";
import { CompletedCheckbox } from "./CompletedCheckbox";
import { Button } from "react-bootstrap";

export const CompletedGoals = ({ handleCloseCompleted, setGoal }) => {
  const [complete, setComplete] = useState([]);

  //Grab goals from databse and set to state
  const fetchCompletedGoals = () => {
    return fetch("http://localhost:8088/goals")
      .then((response) => response.json())
      .then((goalArray) => {
        setComplete(goalArray);
      });
  }

  //Run fetch function on load
  useEffect(() => {
    fetchCompletedGoals()
  }, []);

  //Function to delete specific goal and update goal list state
  const deleteGoal = (goal) => {
    return fetch(`http://localhost:8088/goals/${goal.id}`, {
      method: "DELETE"
    })
      .then(fetchCompletedGoals)

  }

  return (
    <>
      <article
        style={{ backgroundColor: "#f2e9e4" }}>
        {complete.map((goal) => {
          if (goal.completed === true) {
            return (
              <section>
                <section
                  className="goalItem"
                  key={`complete--${complete.id}`}>
                  <h6
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10px",
                      marginTop: "15px",
                      textDecoration: "underline"
                    }}
                  >Completed Goals</h6>
                  <div
                    style={{
                      display:
                        "flex",
                      flexDirection: "row",
                      margin: "15px"
                    }}>
                    <CompletedCheckbox
                      goalProp={goal}
                      setState={setGoal} />
                    <div
                      style={{ marginLeft: "10px" }}>
                      {goal.goal}
                    </div>
                    <div>
                      <a
                        onClick={(e) => {
                          deleteGoal(goal);
                        }}
                        className="btnComplete link-danger"
                        color="secondary"
                        type="button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >Delete
                      </a>
                    </div>
                  </div>
                </section>
              </section>
            );
          } else {
            return "";
          }
        })}
      </article>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "whitesmoke"
        }}>
        <Button
          variant="secondary"
          style={{
            margin: "1.5%",
            width: "20%"
          }}
          onClick={(clickEvent) => {
            handleCloseCompleted(clickEvent);
          }}
        >Close
        </Button>
      </div>
    </>
  );
};