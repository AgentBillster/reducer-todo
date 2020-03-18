import React from "react";

const Todos = props => {
    console.log('*****************',props)
  
    const handleToggle = id => {
    props.dispatch({ type: "TOGGLE_COMPLETED", id: id });
  };


  return (
    <div>
      {props.state.map(todo => {
        return (
          <div
            onClick={() => handleToggle(todo.id)}
            key={todo.id}
            className={`item${todo.completed ? "completed" : ""}`}
          >
            <p>{todo.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
