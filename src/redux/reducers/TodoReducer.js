import * as constants from "../constants";
import { initialState } from "../initialState";
const TodoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed,
        },
      ];
    case constants.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default TodoReducer;
