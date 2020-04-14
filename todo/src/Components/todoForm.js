import React, { useState, useReducer } from "react";
import { initialState, reducerTodo } from "../reducers/Reducers";
import { Todos } from "./Todos";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducerTodo, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    console.log(newTodo);
    setNewTodo("");
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <form>
        <input
          type="text" placeholder="Add Todo" name="newTodo" value={newTodo}
          onChange={handleChanges}
       />

        <button type="submit" onClick={handleSubmit}>
          Add
        </button>

        <button type="submit" onClick={handleClear}>
          Clear Completed
        </button>
      </form>

      <div>
        {state.map((item) => (
          <Todos state={item} id={item.id} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
