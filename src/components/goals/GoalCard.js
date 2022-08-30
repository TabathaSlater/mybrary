import { Checkbox } from "./Checkbox";
import { ListGroup } from "react-bootstrap";

//Parent is BookGoals.js
export const GoalCard = ({ goals, setGoal, setGoalId, deleteGoal, handleShowEdit }) => {
    return (
        <section className="full_goals_homepage">
            {/* Map through goal array to show each uncompleted goal individually */}
            {goals.map((goal) => {
                if (goal.completed === false) {
                    return (
                        <ListGroup
                        className="list_homepage"
                            key={`goal--${goal.id}`}
                            variant="flush">
                            <div className="goalList">
                                <Checkbox
                                    goalProp={goal}
                                    setState={setGoal} />
                                <section className="goal_list_section">
                                    {goal.goal}
                                </section>

                                {/* Link for editing a goal */}
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
                                >Edit
                                </a>

                                {/* Link for deleting a goal */}
                                <a
                                    onClick={(e) => {
                                        deleteGoal(goal);
                                    }}
                                    className="btn-link link-danger"
                                    color="secondary"
                                    type="button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Delete
                                </a>
                            </div>
                        </ListGroup>
                    );
                }
            })}
        </section>
    )
}