import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import FilterReducer from "./FilterReducer";

const rootReducer = combineReducers({
  todos: TodoReducer,
  visibilityFilter: FilterReducer,
});
export default rootReducer;

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW ALL":
      return todos;
    case "SHOW COMPLETED":
      return todos.filter((todo) => todo.completed);
    case "SHOW ACTIVE":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};
