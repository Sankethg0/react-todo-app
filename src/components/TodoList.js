import React,{useState} from 'react';
import Todo from './Todo';
import TodoForms from './TodoForms';


function TodoList() {
    const[todos,setTodos]=useState([]);

    const addTodo=todo=>{
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);

  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };



    return (
        <div>
            <h1>What's the plan today?</h1>
            <TodoForms onSubmit={addTodo}/>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}/>
            
        </div>
    );
}

export default TodoList;
