import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import ToDoList from './ToDoList'
import AddTodo from './ToDoList/AddTodo'
import { store } from './store';
import { initTodos } from './init';

initTodos(store);

const App = () => (
  <div className="container">
    <div className="row">
      <h1>Todo List</h1>
    </div>
    <hr/>
    <ToDoList />
    <hr/>
    <AddTodo />
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);
