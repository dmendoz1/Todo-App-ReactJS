import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList, setTodoList}) => {
  if(todoList.length) {
    return (
      todoList.map((todoItem, idx) => {
        return (
          <Todo
            todoItem={todoItem}
            key={idx}
            idx={idx}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        )
      })
    )}
    else {
      return (
        <div className="no-todos-warning">
          <p>You currently have no tasks, enter a new one above...</p>
        </div>
      )
    }
}
export default TodoList
