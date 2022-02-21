import * as constants from "../constants";
import { v4 as uuid } from "uuid";

export const addTodo = (text) => {
  return {
    type: constants.ADD_TODO,
    text,
    id: uuid(),
    completed: false,
  };
};

export const toggleTodo = (id) => {
  return { type: constants.TOGGLE_TODO, id };
};

export const deleteTodo = (id) => {
  return { type: constants.DELETE_TODO, payLoad: id };
};
