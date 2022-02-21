import React from "react";
import { toggleTodo } from "./redux/actions/Todoactions";
import { useDispatch } from "react-redux";

const Listitem = ({ text, onClick, style }) => {
  return (
    <li onClick={onClick} style={style}>
      {text}
    </li>
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
          />
        ))}
      </ul>
    </div>
  );
};

export default Display;
