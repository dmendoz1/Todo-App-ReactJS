import React from 'react';

const Todo = ({idx, todoList, setTodoList, todoItem}) => {
  const removeTodo = _ => {
    const newTodoList = todoList.filter( (todo, index) => {
      return index !== idx
    });
    setTodoList(newTodoList);

  }

  const completeTodo = _ => {
      const newCompletedState = todoList.map( (todoItem, index) => {
        if(index === idx) {
          return {
            todo: todoItem.todo,
            completed: !todoItem.completed
          }
        }

        return todoItem;
      })
      setTodoList(newCompletedState);
  }

  return (
    <div className="todo-item-wrapper">
      <label htmlFor={'todoItem' + idx} className={todoItem.completed ? 'completed-checkbox completed' : 'completed-checkbox'}>
        <input id={'todoItem' + idx} type="checkbox" className="completeBtn" checked={todoItem.completed ? true: false} onChange={completeTodo} />
        <span className="checkmark"></span>
      </label>
      <div className={todoItem.completed ? 'todo-item completed-todo' : 'todo-item'} >
        {todoItem.todo}
      </div>
        <button className="remove-btn" onClick={removeTodo}>remove</button>
    </div>
  );
}

export default Todo;
