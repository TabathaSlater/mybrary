import { Checkbox } from "./Checkbox";
import { ListGroup } from "react-bootstrap";

//Parent is BookGoals.js
export const GoalCard = ({ goals, setGoal, setGoalId, deleteGoal, handleShowEdit }) => {
    return (
        <>
            {/* Map through goal array to show each uncompleted goal individually */}
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
                            }}>
                            <div className="goalList">
                                <Checkbox
                                    goalProp={goal}
                                    setState={setGoal} />
                                <section
                                    style={{
                                        marginLeft: "6px",
                                        textDecoration: "underline",
                                        margin: "10px",
                                    }}>
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
        </>
    )
}