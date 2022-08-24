export const CompletedCheckbox = ({ goalProp, setState }) => {
  const handleCheckbox = (e) => {
    //Perform PATCH for the object
    fetch(`http://localhost:8088/goals/${goalProp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: false }),
    })
      .then((response) => response.json())
      .then(() =>
        fetch("http://localhost:8088/goals")
          .then((response) => response.json())
          .then((newGoal) => {
            setState(newGoal);
          })
      );
  };

  return (
    <>
      <input
        className="checkTask"
        type="checkbox"
        defaultChecked={goalProp.completed}
        value={goalProp.completed}
        onClick={(clickEvent) => {
          handleCheckbox();
        }}
      />
    </>
  );
};
