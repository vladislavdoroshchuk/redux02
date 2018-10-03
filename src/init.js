import { saveTodo } from './ToDoList';
import { compose } from './redux-utils';
import todos from './todos';

let id = 0;
const addAttributes = ( todo ) => {
  todo.id = id++;
  todo.is_deleted = false;
  return todo;
};

export const initTodos = ({ dispatch }) => todos.map(
  compose(dispatch, saveTodo, addAttributes)
);