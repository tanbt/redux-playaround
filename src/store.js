import { createStore, combineReducers } from 'redux';
import { visibilityFilter } from './reducers/VisibilityFilters.js';
import { todos } from './reducers/Todos.js';

export const store = createStore(combineReducers({
  visibilityFilter,
  todos
}));
