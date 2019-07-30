import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodoSection from './components/NewTodoSection';


const TodoApp = _ => {
  const [todoItem, setTodoItem] = useState({
    todo : '',
    completed: false
  });
  var myLocalStorageItems = JSON.parse(localStorage.getItem("myTodoListInLocalStorage"));
  const [todoList, setTodoList] = useState( myLocalStorageItems || []);
  const [error, setErrorState] = useState({
    isThereError: false,
    errorMsg: ''
  });


  React.useEffect(() => {
    localStorage.setItem('myTodoListInLocalStorage', JSON.stringify(todoList));
  }, [todoList]);


  const completedTodoNum = todoList.filter((todoItem, index) => todoItem.completed).length;
  const pendingTodoNum = todoList.length - completedTodoNum;
  return (
    <div className="todo-container">
      <h1 className="todo-title centered"> Tasks </h1>
      <NewTodoSection
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        setTodoList={setTodoList}
        todoList={todoList}
        setErrorState={setErrorState}
      />
      {error.isThereError && <span className="error-msg">{error.errorMsg}</span>}
       <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <div className="tracker">
        <p>Completed: {completedTodoNum}</p>
        <p>Pending: {pendingTodoNum}</p>
        <p>Total number of tasks in queue: {todoList.length}</p>
      </div>
    </div>
  )
}

export default TodoApp;
