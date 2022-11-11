import "./App.css";
import { useState } from "react";
import {useAppDispatch} from "./hook";

import {addTodo} from './store/todoSlice'

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addTodo(text))
    setText('')
  }


  return (
      <div className="App">
        <InputField title={text} handleSubmit={addTask} handleInput={setText }/>

        <TodoList />
      </div>
  );
}

export default App;