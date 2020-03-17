import React, { useState, useReducer } from "react";
import { initialState, reducerTodo } from "../reducers/Reducers";
import Todos from "./Todos";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducerTodo, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    console.log(newTodo);
  };

  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add Todo"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Add
        </button>

        <button type="submit" onClick={handleClear}>
          Clear Completed
        </button>
      </form>

      <Todos
        state={state}
        dispatch={dispatch}
        id={state.id}
        newTodo={newTodo}
      />
      
    </div>
  );
};

export default TodoForm;
