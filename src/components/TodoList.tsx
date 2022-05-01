import React from 'react';
import "./styles.css";
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList: React.FC<Props> = ({ todos, setTodos}) => {
    return (<div className="container">
        <Droppable droppableId='TodosList'>
          {(provided)=> (
        <div className='todos' ref={provided.innerRef}
        {...provided.droppableProps}>
            <span className='todos_heading'>
                Active Tasks
            </span>
            {
                todos.map((todo=>
                    <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
                    ))
            }
        </div>
              )
          }  
        
        </Droppable>
        
        <div className='todos remove'>
        <span className='todos_heading'>
                Completed Tasks
            </span>
            {
                todos.map((todo=>
                    <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
                    ))
            }
        </div>
    </div>);
};

export default TodoList;