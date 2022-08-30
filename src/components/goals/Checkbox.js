
//Component to hand the checkbox on each goal in uncompleted goal list
export const Checkbox = ({ goalProp, setState }) => {

  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);


  const handleCheckbox = (e) => {

    //Perform PATCH for the object to mark it complete in database on click
    fetch(`http://localhost:8088/goals/${goalProp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    })
      .then((response) => response.json())
      //Fetch new goal list to update 
      .then(() =>
        fetch(`http://localhost:8088/goals?userId=${mybraryUserObject.id}`)
          .then((response) => response.json())
          .then((newGoal) => {
            //set state of goal list to reflect changes
            setState(newGoal);
          })
      );
  };

  return (
    <>
      <input
        className="checkTask"
        type="checkbox"
        value={goalProp.completed}
        onClick={(clickEvent) => handleCheckbox()}
      />
    </>
  );
};
