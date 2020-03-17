export const initialState = [{ item: "", completed: false, id: Date.now() }];

export const reducerTodo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodos = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [...state, newTodos];

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        completed: !state.completed
      };
      
    case "CLEAR":
      return state.filter(task => !task.completed);
    default:
      return state;
  }
};
