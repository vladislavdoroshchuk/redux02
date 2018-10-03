import React from 'react';
import { connect } from 'react-redux';
//import { store } from '../store';
import ToDoItem from './ToDoItem';

import {
  toggleTodo,
  setFilter,
  getVisibleTodos as getTodos,
  getFilterValue,
  deleteTodoAction,
} from './store';

const ToDoList = ({ todos, onTodoClick, filter, onFilterChange, onDeleteTodoClick }) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <select className="form-control" value={filter} onChange={onFilterChange}>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="not-completed">not completed</option>
          <option value="is-deleted">deleted</option>
        </select>
      </div>
    </div>
    <hr/>
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group">
          {todos.map && todos.map(
            todo => (
              <ToDoItem
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                deleteTodo={() => onDeleteTodoClick(todo.id)}
              />
            )
          )}
        </ul>
      </div>
    </div>
  </div>
);

const deleteTodo = is_deleted => true;

const state2Props = state => ({
  todos: getTodos(state),
  filter: getFilterValue(state)
});

const handlers = {
  onTodoClick: id => toggleTodo(id),
  onFilterChange: ({ target }) => setFilter(target.value),
  onDeleteTodoClick: ( id ) => deleteTodoAction(id)
};

export default connect(state2Props, handlers)(ToDoList);