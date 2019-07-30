import React from 'react';

const SubmitBtn = ({todoItem, setTodoItem, setTodoList, todoList, setErrorState}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if(todoItem.todo !== '') {
      const newTodoList = [...todoList, todoItem];
      setTodoList(newTodoList);
      setTodoItem({
          todo: '',
          completed: false
      });
      setErrorState({
        isThereError: false,
        errorMsg: ''
      })
    } else {
      setErrorState({
        isThereError: true,
        errorMsg: 'Task field cannot be left empty!'
      })
    }
  };

  const handleInputChange = e => {
    e.preventDefault();
    const todoItm = {
      todo : e.target.value,
      completed : false
    }
    setTodoItem(todoItm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange = {handleInputChange}
          className="todo-input"
          value={todoItem.todo}
          placeholder="What needs to be done?"
        />
        <input
          className="submit-todo-btn btn"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  )
}

export default SubmitBtn;
