
//Function for checkbox on completed goals list
export const CompletedCheckbox = ({ goalProp, setState }) => {
  const handleCheckbox = (e) => {
    //Perform PATCH for the object to mark it as uncompleted on click
    fetch(`http://localhost:8088/goals/${goalProp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: false }),
    })
      .then((response) => response.json())
      .then(() =>
        //Grab list of updated goals list
        fetch("http://localhost:8088/goals")
          .then((response) => response.json())
          .then((newGoal) => {
            //set goal list state to reflect changes
            setState(newGoal);
          })
      );
  };

  return (
    <>
      <input
        style={{ marginLeft: "9px" }}
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
