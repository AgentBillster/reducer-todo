import React from "react";

export const Todos = (props) => {
  console.log("*****************", props);

  const handleToggle = () => {
    props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id });
  };

  return (
    <div onClick={handleToggle} className={props.state.completed ? "completed" : ""}>
      <h1>{props.state.item}</h1>
    </div>
  );
};
