import { createStore, combineReducers } from 'redux';
import { todos, domain } from './ToDoList';

export const store = createStore(
  combineReducers({ my_todos: combineReducers({ todos }) }),
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// domain.assign(
//   state => state.my_todos,
// );

domain.attachTo(
  state => state.my_todos,
);