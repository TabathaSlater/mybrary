import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CompletedCheckbox } from "./CompletedCheckbox";
import { Button } from "react-bootstrap";

export const CompletedGoals = ({ handleCloseCompleted, goals, setGoal }) => {
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/goals")
      .then((response) => response.json())
      .then((goalArray) => {
        setComplete(goalArray);
      });
  }, []);

  return (
    <>
      <article className="goalsCompletedList">
        {complete.map((goal) => {
          if (goal.completed === true) {
            return (
              <>
                <section className="goalItems">
                  <section
                    className="goalItem"
                    key={`complete--${complete.id}`}
                  >
                    <CompletedCheckbox goalProp={goal} setState={setGoal} />
                    <section className="column">
                      <div className="goalName" style={{ marginLeft: "10px" }}>
                        {goal.goal}
                      </div>
                    </section>
                  </section>
                </section>
              </>
            );
          } else {
            return "";
          }
        })}
      </article>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="secondary"
          style={{ margin: "1.5%", width: "20%" }}
          onClick={(clickEvent) => {
            handleCloseCompleted(clickEvent);
          }}
        >
          Close
        </Button>
      </div>
    </>
  );
};
