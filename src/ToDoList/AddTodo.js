import React from 'react';
import { connect } from 'react-redux';

import { store } from '../store'

import { getVisibleTodos as getTodos, saveTodo} from './store';

const AddTodo = ({ onClick }) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-10">
        <input className="form-control" id="new-todo" ref={node => {
          this.input = node;
        }} />
      </div>
      <div className="col-md-2">
        <button type="submit" className="btn btn-primary container" onClick={onClick}>Add</button>
      </div>
    </div>
  </div>
);

const newTodo = (name) => {
  this.input.value = '';

  return {
    id: store.getState().my_todos.todos.maxId + 1,
    name: name,
    completed: store.getState().my_todos.todos.filter !== 'not-completed'
  }
};

const state2Props = state => ({
  todos: getTodos(state)
});

const handlers = {
  onClick: () => saveTodo(newTodo(this.input.value))
};

export default connect(state2Props, handlers)(AddTodo);
