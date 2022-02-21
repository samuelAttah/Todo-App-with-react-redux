import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Display from "./Display";
import { addTodo } from "./redux/actions/Todoactions";
import { getVisibleTodos } from "./redux/reducers";

const Todos = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.visibilityFilter);

  const visibleTodos = getVisibleTodos(todos, filter);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return alert("Kindly fill in a valid Text");
    }
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} name="text" />
        <button>Submit Todo</button>
      </form>
      <Display todos={visibleTodos} />
    </div>
  );
};

export default Todos;
