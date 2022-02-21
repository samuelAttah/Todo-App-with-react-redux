import React from "react";
import { toggleTodo, deleteTodo } from "./redux/actions/Todoactions";
import { useDispatch } from "react-redux";

const Listitem = ({ text, onClick, style, onDelete }) => {
  return (
    <>
      <li onClick={onClick} style={style}>
        {text}
        <button onClick={onDelete}>Delete</button>
      </li>
    </>
  );
};
const Display = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Listitem
            key={todo.id}
            text={todo.text}
            onClick={() => {
              dispatch(toggleTodo(todo.id));
            }}
            style={todo.completed ? { textDecoration: "line-through" } : null}
            onDelete={() => {
              dispatch(deleteTodo(todo.id));
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Display;
