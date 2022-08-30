import { useEffect, useState } from "react";
import { CompletedCheckbox } from "./CompletedCheckbox";
import { Button } from "react-bootstrap";

export const CompletedGoals = ({ handleCloseCompleted, setGoal }) => {
  const [complete, setComplete] = useState([]);

  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);


  //Grab goals from databse and set to state
  const fetchCompletedGoals = () => {
    return fetch(`http://localhost:8088/goals?userId=${mybraryUserObject.id}`)
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
      <article className="completed_article">
        <h5 className="goal_form_heading">Completed Goals</h5>
        {complete.map((goal) => {
          if (goal.completed === true) {
            return (
              <section>
                <section
                  className="goalItem"
                  key={`complete--${complete.id}`}>

                  <div className="goal_item_div">

                    <CompletedCheckbox
                      goalProp={goal}
                      setState={setGoal} />

                    <div className="goal_nested_div">
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
      <div className="completed_goal_item_div">
        <Button className="completed_close_button"
          variant="secondary"
          onClick={(clickEvent) => {
            handleCloseCompleted(clickEvent);
          }}
        >Close
        </Button>
      </div>
    </>
  );
};