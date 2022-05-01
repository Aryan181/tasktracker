import React, { useState } from 'react';
import { DEFAULT_ECDH_CURVE } from 'tls';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from "./model";
import { DragDropContext } from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [todo, setToDo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setcompletedTodos] = useState<Todo[]>([])

const handleAdd = (e : React.FormEvent) => {
  e.preventDefault();

  if(todo) {
    setTodos([...todos, {id: Date.now(), todo, isDone:false }])
    setToDo("");
  }

};
console.log(todos);


  return (
    <DragDropContext onDragEnd={() => {}}>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setToDo} handleAdd={handleAdd}/>
      <TodoList todos={todos} 
      setTodos={setTodos}
      completedTodos={completedTodos} 
      setCompletedTodos = {setcompletedTodos}
      />
    </div>
    </DragDropContext>
  );
}

export default App;
