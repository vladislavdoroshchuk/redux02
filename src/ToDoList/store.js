import { combineReducers } from 'redux';

// import { createSelector } from 'reselect';

import { getFilterFunc, filterList, get} from './helpers';
import {
  action,
  createReducer,
  mergePayload,
  lookupReducer,
  include,
  domainSelector,
} from '../redux-utils';


const _toggleTodo = action('TODO::TOGGLE');
export const toggleTodo = id => _toggleTodo({ id });
export const saveTodo = action('TODO::SAVE');
export const setFilter = action('TODO::SET-FILTER');
export const _deleteTodoAction = action('TODO::DELETE-TODO');
export const deleteTodoAction = id => _deleteTodoAction({ id });

const initialTodoState = {
  id: 0,
  name: '',
  completed: false,
  is_deleted: false
};

const todo = createReducer(initialTodoState, {
  [_toggleTodo.type]: state => ({
    ...state, completed: !state.completed
  }),
  [saveTodo.type]: mergePayload,
  [_deleteTodoAction.type]: state => ({
    ...state, is_deleted: !state.is_deleted
  })
});

const todoLookup = lookupReducer(todo);

const byId = createReducer({}, {
  [_toggleTodo.type]: todoLookup,
  [_deleteTodoAction.type]: todoLookup,
  [saveTodo.type]: todoLookup
});

const ids = createReducer([], {
  [saveTodo.type]: (state, { payload} ) => include(state, payload.id)
});

const maxId = createReducer([], {
  [saveTodo.type]: (state, { payload} ) => +payload.id
});

const filter = createReducer('all', {
  [setFilter.type]: (_, { payload }) => payload
});

const deleteTodo = createReducer(false, {
  [_deleteTodoAction.type]: state => ({
    ...state, is_deleted: !state.is_deleted
  })
});

const todos = combineReducers({ byId, ids, maxId, filter, deleteTodo});

export default todos;

// ------- SELECTORS --------
const createSelector = (...selectors) => {

  const selector = selectors.pop();
  return (...args) => selector(
    ...selectors.map(s => s(...args))
  );
};

export const domain = domainSelector(
  state => state.todos
);

export const getTodos = createSelector(
  domain, ({ ids, byId }) => ids.map(id => byId[id])
);

export const getFilterValue = createSelector(
  domain, get('filter')
);

export const getFilter = createSelector(
  getFilterValue, getFilterFunc
);

export const getVisibleTodos = createSelector(
  getTodos, getFilter, filterList
);
