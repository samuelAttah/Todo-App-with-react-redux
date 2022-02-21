import "./App.css";
import { Routes, Route } from "react-router-dom";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
